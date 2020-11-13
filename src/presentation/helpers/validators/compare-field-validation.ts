import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly FieldeComparName: string) {}

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.FieldeComparName]) {
      return new InvalidParamError(this.FieldeComparName)
    }
  }
}
