import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('get profile readonly test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { readonly: true }
    }

    expect(getProfileReadonly(state as IStateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined)
  })
})
