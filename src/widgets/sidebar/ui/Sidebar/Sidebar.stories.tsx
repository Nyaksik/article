import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './Sidebar'

import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

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

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK)]
