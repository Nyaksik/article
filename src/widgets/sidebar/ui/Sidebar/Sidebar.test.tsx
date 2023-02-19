import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender'

describe('button', () => {
  test('toggle', () => {
    ComponentRender(<Sidebar />, { route: '/' })

    const toggleButton = screen.getByTestId('sidebar-toggle')

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    fireEvent.click(toggleButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
