import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body
    if (!email) {
      return Promise.resolve(badRequest(new MissingParamError('email')))
    }
    if (!password) {
      return Promise.resolve(badRequest(new MissingParamError('password')))
    }
    const isValid = this.emailValidator.isValid(email)
    if (!isValid) {
      return Promise.resolve(badRequest(new InvalidParamError('email')))
    }
  }
}
