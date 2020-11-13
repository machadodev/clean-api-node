import bcrypt from 'bcrypt'
import { HashComparer } from '../../../data/protocols/criptography/hash-compare'
import { Hasher } from '../../../data/protocols/criptography/hasher'

export class BcrypterAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) { }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }

  async hash (value: string): Promise<string> {
    const hashe = await bcrypt.hash(value, this.salt)
    return hashe
  }
}
