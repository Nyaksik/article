import { type FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import type { IReduxStoreWithManager, StateSchemaKey } from 'app/providers/storeProvider'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface IDynamicModuleLoader {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = (props) => {
  const { children, reducers, removeAfterUnmount = false } = props

  const dispatch = useDispatch()
  const store = useStore() as IReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)

      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name)

          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

  return (
    <>
      { children }
    </>
  )
}
