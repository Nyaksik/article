import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('counter', () => {
  test('render', () => {
    ComponentRender(<Counter />, { route: '/', initialState: { counter: { value: 10 } } })

    expect(screen.getByTestId('value')).toHaveTextContent('10')
  })

  test('increment', () => {
    ComponentRender(<Counter />, { route: '/', initialState: { counter: { value: 10 } } })

    userEvent.click(screen.getByTestId('inc'))
    expect(screen.getByTestId('value')).toHaveTextContent('11')
  })

  test('decrement', () => {
    ComponentRender(<Counter />, { route: '/', initialState: { counter: { value: 10 } } })

    userEvent.click(screen.getByTestId('dec'))
    expect(screen.getByTestId('value')).toHaveTextContent('9')
  })
})
