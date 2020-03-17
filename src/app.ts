import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import { helloMsj } from './utils/hello'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return helloMsj(event)
}
