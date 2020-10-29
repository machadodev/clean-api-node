import { AddAccountModel } from '../usecases/add-account'

export interface AccountModel {
  id: string
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => AccountModel
}
