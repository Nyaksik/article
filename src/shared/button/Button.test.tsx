import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/button/Button'

describe('button', () => {
  test('default test', () => {
    render(<Button>test</Button>)

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('theme clear', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)

    expect(screen.getByText('test')).toHaveClass('clear')
  })
})
