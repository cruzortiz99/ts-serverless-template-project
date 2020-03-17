import { expect } from 'chai'
import 'mocha'
import { helloMsj } from '../../src/utils/hello'

describe('Hello world test', () => {
  const event = 'test'
  const expected = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    })
  }
  const response = helloMsj(event)

  it('Should have status code 200', () => {
    expect(response.statusCode).to.equal(expected.statusCode)
  })

  it('Should have body with message with: Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!', () => {
    expect(JSON.parse(response.body).message).to.equal(
      JSON.parse(expected.body).message
    )
  })

  it(`Should have the input with: ${event}`, () => {
    expect(JSON.parse(response.body).input).to.equal(
      JSON.parse(expected.body).input
    )
  })
})
