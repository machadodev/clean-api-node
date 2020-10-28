import { HttpResponse } from '../protocols/http'

export const badRequset = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
