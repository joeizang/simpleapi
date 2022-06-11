import express, { Request, Response } from 'express'
import helmet from 'helmet'
import 'reflect-metadata'
import dataContext from '../ormInit'
import businessRoutes from './routes/businessRoute'


dataContext.initialize().then(async (source) => {
  global.dataSource = source
  const app = express()
    // no use for body parser any more
    app.use(express.json())
    app.use(express.urlencoded({ extended: true })) // optional for urlencoded body
    app.use(helmet())

    businessRoutes(app)

    app.listen(3050, () => {
      console.log('Server started on 3050!')
    })
}).catch(error => {
  throw new Error(`Couldn't start server with error ${error}`)
})

