import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { CompareFieldsValidation } from '../../presentation/helpers/validators/compare-fields-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}
