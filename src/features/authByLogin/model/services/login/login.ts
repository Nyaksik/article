import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser, userActions } from 'entities/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type IThunkConfig } from 'app/providers/storeProvider'

interface ILogin {
  login: string
  password: string
}

export const login = createAsyncThunk<IUser, ILogin, IThunkConfig>(
  'login/login',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<IUser>('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
