import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title',
  text: 'text'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title',
  text: 'text'
}
PrimaryDark.decorators = [themeDecorator(Theme.DARK)]

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'text'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title',
  text: 'text',
  theme: TextTheme.ERROR
}
