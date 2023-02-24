import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Navbar } from './Navbar'

import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'

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
Light.decorators = [storeDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})]

export const UserAuth = Template.bind({})
UserAuth.args = {}
// @ts-expect-error
UserAuth.decorators = [themeDecorator(Theme.DARK), storeDecorator({ user: { authData: {} } })]
