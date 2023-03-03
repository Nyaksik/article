import { type IStateSchema } from 'app/providers/storeProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type AxiosStatic } from 'axios'
import { mockedAxios } from 'features/authByLogin/model/services/login/login.test'

type ActionCreatorThunk<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => IStateSchema
  actionCreator: ActionCreatorThunk<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  constructor (actionCreator: ActionCreatorThunk<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })

    return result
  }
}
