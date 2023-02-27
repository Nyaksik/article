import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/providers/storeProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/authByLogin/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  login: loginReducer
}

export const storeDecorator = (initialState: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent/>
  </StoreProvider>
)
