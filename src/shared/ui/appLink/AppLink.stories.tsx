import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
  title: 'shared/appLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [themeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [themeDecorator(Theme.DARK)]
