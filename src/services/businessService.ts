import 'reflect-metadata'
import dataContext from '../../ormInit'

import { GetBusinessApiModel } from '../apiContracts/BusinessApiModels'
import { Business } from '../entities/business'

const businessRepo = global.dataSource.getRepository(Business)

export async function getBusinesses() {
  const businesses = await businessRepo.find({ where: { isDeleted: false }})
  let projectedArray: GetBusinessApiModel[] = []
  businesses && businesses.length > 0 
    ? businesses.forEach(b => {
        var projected = new GetBusinessApiModel()
        projected.Description = b.businessDescription
        projected.Name = b.businessName
        projected.address = b.businessAddress
        projected.id = b.businessId
        projected.mobileNumber = b.businessPhoneNumber
        projected.location = b.businessLocation
        projected.dateCreated = b.createdAt
        projectedArray.push(projected)
    }) : []
  return projectedArray
}

export async function getBusinessById(id: string) {
  try {
    const business = await businessRepo.findOne({
     where : {
      businessId : id
     }
    })
    const model = new GetBusinessApiModel()
    if(business === null) {
      throw new Error(`Business with id ${id} doesn't exist!`)
    } else {
      model.Description = business.businessDescription
      model.Name = business.businessName
      model.address = business.businessName
      model.dateCreated = business.createdAt
      model.id = business.businessId
      model.mobileNumber = business.businessPhoneNumber
      model.location = business.businessLocation

      return model
    }
  } catch (error) {
    throw new Error(`Some error occurred! Please check while to confirm things on our end!`)
  }  
}

export async function getBuinessByAddress (address: string) {
  try {
    const result = await businessRepo
            .createQueryBuilder().select()
            .where(`MATCH(businessAddress) AGAINST ()`)
            .getMany()
  } catch (error) {
    
  }
}

export async function insertBusiness(business: Business) {
  try {
    var result = await businessRepo.save(business)
    return result
  } catch (error) {
    throw new Error(`Something went horribly wrong ${error}`)
  }
}