import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/storeProvider'
import { getProfileForm, type IProfile } from 'entities/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { ValidateProfileError } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState())

      const errors = validateProfileData(formData)

      if (errors?.length) {
        return thunkAPI.rejectWithValue(errors)
      }

      const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
