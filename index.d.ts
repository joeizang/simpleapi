import { DataSource } from 'typeorm'

declare global {
  var dataSource: DataSource
}

export {}