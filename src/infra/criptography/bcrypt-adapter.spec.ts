import bcrypt from 'bcrypt'
import { BcrypterAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

interface SutTypes {
  sut: BcrypterAdapter
  salt: number
}
const makeSut = (): SutTypes => {
  const salt = 12
  const sut = new BcrypterAdapter(salt)
  return {
    sut,
    salt
  }
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const { sut, salt } = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a has on success', async () => {
    const { sut } = makeSut()
    const hashed = await sut.hash('any_value')
    expect(hashed).toBe('hash')
  })

  test('Should throw if bcryt throws', async () => {
    const { sut } = makeSut()
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => {
      reject(new Error())
    }))
    const promise = sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })
})
