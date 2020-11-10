import { ServerError, Unauthorized } from '../errors'
import { HttpResponse } from '../protocols'

export const badRequset = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new Unauthorized()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data): HttpResponse => ({
  statusCode: 200,
  body: data
})
