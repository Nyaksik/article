import { type DeepPartial } from '@reduxjs/toolkit'
import { profileActions, profileReducer } from './profileSlice'
import { type IProfileSchema, updateProfileData, ValidateProfileError } from 'entities/profile'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

describe('profile slice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false }

    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true })
  })

  test('test cancel edit', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }
    const state: DeepPartial<IProfileSchema> = {
      data,
      form: { username: '' }
    }

    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateError: undefined,
        data,
        form: data
      })
  })

  test('test update', () => {
    const state: DeepPartial<IProfileSchema> = {
      form: { username: '' }
    }

    expect(profileReducer(state as IProfileSchema, profileActions.updateProfile(
      { username: '123' }
    )))
      .toEqual({
        form: { username: '123' }
      })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    }

    expect(profileReducer(state as IProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateError: undefined,
        error: undefined
      })
  })

  test('test update profile service fulfilled', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true
    }

    expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        data,
        form: data,
        validateError: undefined,
        readonly: true
      })
  })
})
