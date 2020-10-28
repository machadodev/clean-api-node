import { MissingParamError } from '../errors/missing-param-error'
import { badRequset } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle (httpResponse: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpResponse.body[field]) {
        return badRequset(new MissingParamError(field))
      }
    }
  }
}
