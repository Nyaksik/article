import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type IUser, userActions } from 'entities/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface ILogin {
  login: string
  password: string
}

export const login = createAsyncThunk<IUser, ILogin>(
  'login/login',
  async ({ login, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        login, password
      })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('Ошибка')
    }
  }
)
