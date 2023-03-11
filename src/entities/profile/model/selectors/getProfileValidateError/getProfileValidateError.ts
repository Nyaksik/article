import { type IStateSchema } from 'app/providers/storeProvider'

export const getProfileValidateError = (state: IStateSchema) => state.profile?.validateError
