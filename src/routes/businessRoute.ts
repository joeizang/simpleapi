import { Express } from 'express'
import { createBusiness, getAllBusinesses, getOneBusinessById } from '../controllers/businessController'
export default function businessRoutes(app: Express) {
  console.log('inside businessRoutes')
  app
  .get('/api/business', getAllBusinesses)
  .get('/api/business/:id', getOneBusinessById)
  .post('/api/business', createBusiness)
}