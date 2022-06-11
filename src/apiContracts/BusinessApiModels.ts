import { BusinessLocationInterface } from "../interfaces/businessLocationInterface"

export class GetBusinessApiModel {
  id: string = ''

  Name: string = ''

  address: string = ''

  mobileNumber: string = ''

  Description: string = ''

  location!: string

  dateCreated!: string
}

export class CreateBusinessApiModel {
  constructor(
  name: string,
  address: string,
  mobileNumber: string,
  Description: string,
  location: string){
    if(name.length > 100) throw new Error('A business is not allowed to have a name longer than a 100 letters!')
    if(address.length > 300) throw new Error('The address you have given is too long')
    if(mobileNumber.length > 77) throw new Error('You might have too many mobile numbers for this business')
    if(Description.length > 300) throw new Error('The business description seems to be too long!')
    if(typeof location.split(',') !== 'object') throw new Error('Are you sure the location is in the right format?!')
  }

}