import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileValidateError } from './getProfileValidateError'
import { ValidateProfileError } from 'entities/profile'

describe('get profile validate error test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { validateError: [ValidateProfileError.SERVER_ERROR] }
    }

    expect(getProfileValidateError(state as IStateSchema)).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileValidateError(state as IStateSchema)).toEqual(undefined)
  })
})
