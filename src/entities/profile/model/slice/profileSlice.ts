import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IProfile, type IProfileSchema } from '../types/profile'
import { fetchProfileData } from 'entities/profile'

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false

        state.error = action.payload
      })
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false
        state.data = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
