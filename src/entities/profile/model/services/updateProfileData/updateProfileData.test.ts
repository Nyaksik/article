import axios from 'axios'
import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import { ValidateProfileError } from 'entities/profile'

jest.mock('axios')

export const mockedAxios = jest.mocked(axios, true)

describe('updateProfileData', () => {
  test('success updateProfileData', async () => {
    const userData = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '123',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: userData
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userData)
  })

  test('error updateProfileData', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })

  test('validate error', async () => {
    const userData = {
      username: 'admin',
      age: 22,
      country: Country.UKRAINE,
      last: '',
      first: '12',
      city: '5455',
      currency: Currency.RUB
    }

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: userData
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
