import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { PageError } from './PageError'

import 'app/styles/index.scss'
import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK)]
