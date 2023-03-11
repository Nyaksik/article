import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('get profile is loading test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { isLoading: true }
    }

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined)
  })
})
