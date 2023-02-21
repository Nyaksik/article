import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider } from 'app/providers/themeProvider'

export const themeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
