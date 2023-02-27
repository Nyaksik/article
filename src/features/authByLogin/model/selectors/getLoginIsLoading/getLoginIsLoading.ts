import { type IStateSchema } from 'app/providers/storeProvider'

export const getLoginIsLoading = (state: IStateSchema) => state.login?.isLoading || false
