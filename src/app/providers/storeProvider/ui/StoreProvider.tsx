import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type IStateSchema } from 'app/providers/storeProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

interface IStoreProvider {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider: FC<IStoreProvider> = (props) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as IStateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
