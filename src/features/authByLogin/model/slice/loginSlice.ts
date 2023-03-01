import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ILoginSchema } from '../types/loginSchema'
import { login } from '../services/login/login'

const initialState: ILoginSchema = {
  login: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false

        state.error = action.payload
      })
      .addCase(login.pending, (state, action) => {
        state.error = undefined

        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
      })
  }
})

export const { actions: loginActions } = loginSlice

export const { reducer: loginReducer } = loginSlice
