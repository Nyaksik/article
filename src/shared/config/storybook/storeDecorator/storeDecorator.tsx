import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/providers/storeProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const storeDecorator = (initialState: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
      <StoryComponent />
  </StoreProvider>
)
