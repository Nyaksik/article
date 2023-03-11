import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

describe('get profile data test', () => {
  test('should return error', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }

    const state: DeepPartial<IStateSchema> = {
      profile: { data }
    }

    expect(getProfileData(state as IStateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileData(state as IStateSchema)).toEqual(undefined)
  })
})
