import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Business } from './src/entities/business'

const dataContext = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  database: 'bizfinderdb',
  username: 'bizfinderadmin',
  password: 'f!ndErbi2@22',
  entities: [Business],
  synchronize: true,
  logging: true
})

export default dataContext
