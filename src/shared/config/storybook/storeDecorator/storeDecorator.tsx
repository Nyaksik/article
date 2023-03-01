import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/providers/storeProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/authByLogin/model/slice/loginSlice'
import { profileReducer } from 'entities/profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  login: loginReducer,
  profile: profileReducer
}

export const storeDecorator = (initialState: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent/>
  </StoreProvider>
)
