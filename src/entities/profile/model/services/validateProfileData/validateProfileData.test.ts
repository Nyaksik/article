import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import { ValidateProfileError } from 'entities/profile'

describe('validateProfileData', () => {
  test('success validateProfileData', async () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }

    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without last and first name', async () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '',
      first: '',
      city: '5455',
      currency: Currency.RUB
    }

    const result = validateProfileData(data)

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('without age or age not number', async () => {
    const noAge = {
      username: 'admin',
      country: Country.UKRAINE,
      last: '123',
      first: '123',
      city: '5455',
      currency: Currency.RUB
    }
    const noNumberAge = {
      username: 'admin',
      age: '123',
      country: Country.UKRAINE,
      last: '123',
      first: '123',
      city: '5455',
      currency: Currency.RUB
    }

    const resultNoAge = validateProfileData(noAge)

    // @ts-expect-error
    const resultNoNumberAge = validateProfileData(noNumberAge)

    expect(resultNoAge).toEqual([ValidateProfileError.INCORRECT_AGE])
    expect(resultNoNumberAge).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('without country', async () => {
    const data = {
      username: 'admin',
      age: 22,
      last: '213',
      first: '123',
      city: '5455',
      currency: Currency.RUB
    }

    const result = validateProfileData(data)

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('without data', async () => {
    const result = validateProfileData()

    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
})
