export interface SequelizeSetUp {
  database: 'string'
  username: 'string'
  password: 'string'
  host: 'string'
  port?: number
  dialect: 'mysql' | 'postgres' | 'mssql' | 'sqlite' | 'mariadb'
}
