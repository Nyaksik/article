import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ThemeButton } from './Button'

import 'app/styles/index.scss'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED
}
OutlinedDark.decorators = [themeDecorator(Theme.DARK)]