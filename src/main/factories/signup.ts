import { DbAddAccount } from '../../data/usecases/addAccount/db-add-account'
import { BcrypterAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { Controller } from '../../presentation/protocols'
import { EmailValidatorAdapter } from '../../utils/email-validator-adatper'
import { LogControllerDecorator } from '../decorators/log'

export const makeSignUpController = (): Controller => {
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const encrypterAdapter = new BcrypterAdapter(12)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(encrypterAdapter, accountMongoRepository)
  const signupController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return new LogControllerDecorator(signupController, null)
}
