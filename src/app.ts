import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import { helloMsj } from './utils/hello'
// Database setup imported on main file
import sequelize from './db'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return helloMsj(event)
}
