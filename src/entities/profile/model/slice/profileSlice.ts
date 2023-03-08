import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IProfile, type IProfileSchema } from '../types/profile'
import { fetchProfileData, updateProfileData } from 'entities/profile'

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.form = {
        ...state.data,
        ...action.payload
      }
    },
    cancelEdit: (state) => {
      state.readonly = true

      state.form = state.data
    }
  },
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
        state.form = action.payload
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = false
      })
  }
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
