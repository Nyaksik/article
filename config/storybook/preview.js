import { addDecorator } from '@storybook/react'
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(styleDecorator)
addDecorator(themeDecorator(Theme.LIGHT))
addDecorator(routerDecorator)
