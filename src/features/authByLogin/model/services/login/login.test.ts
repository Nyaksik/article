import axios from 'axios'
import { login } from './login'
import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

jest.mock('axios')

export const mockedAxios = jest.mocked(axios, true)

describe('login', () => {
  test('success login', async () => {
    const userData = { login: 'admin', id: '1' }

    const thunk = new TestAsyncThunk(login)

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))

    const result = await thunk.callThunk({ login: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userData)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(login)

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk({ login: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
