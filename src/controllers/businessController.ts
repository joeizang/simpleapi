import 'reflect-metadata'
import { Request, Response } from 'express'
import { getBusinessById, getBusinesses, insertBusiness } from '../services/businessService'
import { Business } from '../entities/business'
import { v4 as uuidv4 } from 'uuid'

export async function getAllBusinesses(req: Request, res: Response) {
  console.log('inside business controller')
  try {
    return res.status(200).json(await getBusinesses())
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function getOneBusinessById(req: Request<{id: ''},{},{}>, res: Response) {
  try {
    if(req.params.id.length === 0) return res.status(400).send('You sent an invalid string')
    return res.status(200).json(await getBusinessById(req.params.id))
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export async function createBusiness(req: Request<{},{},{
  name: string,
  description: string,
  mobileNumber: string,
  location: string,
  address: string
}>, res: Response): Promise<Response<any, Record<string, any>>> {
  try {
    const newBusiness = new Business()
    newBusiness.businessAddress = req.body.address
    newBusiness.businessDescription = req.body.description
    newBusiness.businessLocation = req.body.location
    newBusiness.businessName = req.body.name
    newBusiness.businessPhoneNumber = req.body.mobileNumber
    const result = res.status(201).json(await insertBusiness(newBusiness))
    return result
  } catch (error) {
    throw new Error(`Your business could not be created. This error occurred, ${error}`)
  }
}