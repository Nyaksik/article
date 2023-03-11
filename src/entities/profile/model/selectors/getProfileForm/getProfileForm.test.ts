import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

describe('get profile form test', () => {
  test('should return error', () => {
    const form = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }

    const state: DeepPartial<IStateSchema> = {
      profile: { form }
    }

    expect(getProfileForm(state as IStateSchema)).toEqual(form)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileForm(state as IStateSchema)).toEqual(undefined)
  })
})
