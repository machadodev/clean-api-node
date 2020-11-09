import { DbAddAccount } from '../../data/usecases/addAccount/db-add-account'
import { BcrypterAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adatper'

export const makeSignUpController = (): SignUpController => {
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const encrypterAdapter = new BcrypterAdapter(12)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(encrypterAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
