import { ServerError } from '../errors'
import { HttpResponse } from '../protocols'

export const badRequset = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (data): HttpResponse => ({
  statusCode: 200,
  body: data
})
