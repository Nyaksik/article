import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type IStateSchema } from 'app/providers/storeProvider'
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

interface IStoreProvider {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProvider> = (props) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props

  const store = createReduxStore(initialState as IStateSchema, asyncReducers as ReducersMapObject<IStateSchema>)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
