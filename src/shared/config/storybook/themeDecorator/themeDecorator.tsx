import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/themeProvider'

export const themeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
