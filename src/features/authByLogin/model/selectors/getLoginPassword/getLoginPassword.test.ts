import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getLoginPassword } from './getLoginPassword'

describe('get login isLoading test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      // @ts-expect-error
      login: {
        password: 'password'
      }
    }

    expect(getLoginPassword(state as IStateSchema)).toEqual('password')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginPassword(state as IStateSchema)).toEqual('')
  })
})
