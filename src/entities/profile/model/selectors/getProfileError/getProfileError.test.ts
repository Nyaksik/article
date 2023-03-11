import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileError } from './getProfileError'

describe('get profile error test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: '123'
      }
    }

    expect(getProfileError(state as IStateSchema)).toEqual('123')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileError(state as IStateSchema)).toEqual(undefined)
  })
})
