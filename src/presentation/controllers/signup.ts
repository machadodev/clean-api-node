import { MissingParamError } from '../errors/missing-param-error'
import { badRequset } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpResponse: HttpRequest): HttpResponse {
    if (!httpResponse.body.name) {
      return badRequset(new MissingParamError('name'))
    }
    if (!httpResponse.body.email) {
      return badRequset(new MissingParamError('email'))
    }
  }
}
