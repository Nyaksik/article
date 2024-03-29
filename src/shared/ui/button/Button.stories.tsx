import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'

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
  theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED
}
OutlinedDark.decorators = [themeDecorator(Theme.DARK)]

export const OutlinedRed = Template.bind({})
OutlinedRed.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED_RED
}

export const Background = Template.bind({})
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
}
BackgroundInverted.decorators = [themeDecorator(Theme.DARK)]

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
}

export const SquareSizeXl = Template.bind({})
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
}

export const OutlinedSizeM = Template.bind({})
OutlinedSizeM.args = {
  children: 'Text',
  size: ButtonSize.M,
  theme: ButtonTheme.OUTLINED
}

export const OutlinedSizeL = Template.bind({})
OutlinedSizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
  theme: ButtonTheme.OUTLINED
}

export const OutlinedSizeXl = Template.bind({})
OutlinedSizeXl.args = {
  children: 'Text',
  size: ButtonSize.XL,
  theme: ButtonTheme.OUTLINED
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Text',
  size: ButtonSize.XL,
  theme: ButtonTheme.OUTLINED,
  disabled: true
}
