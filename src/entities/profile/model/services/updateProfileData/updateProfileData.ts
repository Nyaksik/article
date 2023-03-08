import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/storeProvider'
import { getProfileForm, type IProfile } from 'entities/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState())

      const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
