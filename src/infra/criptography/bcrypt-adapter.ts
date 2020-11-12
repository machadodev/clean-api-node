import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/criptography/hasher'

export class BcrypterAdapter implements Hasher {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hashe = await bcrypt.hash(value, this.salt)
    return hashe
  }
}
