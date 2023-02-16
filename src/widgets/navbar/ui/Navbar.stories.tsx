import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Navbar } from './Navbar'

import 'app/styles/index.scss'
import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK)]
