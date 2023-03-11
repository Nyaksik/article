import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './Sidebar'

import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [storeDecorator({
  user: { authData: { id: '123', login: '123' } }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
  user: { authData: { id: '123', login: '123' } }
})]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [storeDecorator({ user: {} })]
