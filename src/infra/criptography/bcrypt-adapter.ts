import bcrypt from 'bcrypt'
import { HashComparer } from '../../data/protocols/criptography/hash-compare'
import { Hasher } from '../../data/protocols/criptography/hasher'

export class BcrypterAdapter implements Hasher, HashComparer {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async compare (value: string, hash: string): Promise<boolean> {
    await bcrypt.compare(value, hash)
    return true
  }

  async hash (value: string): Promise<string> {
    const hashe = await bcrypt.hash(value, this.salt)
    return hashe
  }
}
