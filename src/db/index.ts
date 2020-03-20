import { Sequelize } from 'sequelize'
import database from './database.config'

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    port: database.port,
    dialect: database.dialect
  }
)
export default sequelize
