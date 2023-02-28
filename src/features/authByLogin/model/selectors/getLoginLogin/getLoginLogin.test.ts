import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getLoginLogin } from './getLoginLogin'

describe('get login isLoading test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      // @ts-expect-error
      login: {
        login: 'login'
      }
    }

    expect(getLoginLogin(state as IStateSchema)).toEqual('login')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginLogin(state as IStateSchema)).toEqual('')
  })
})
