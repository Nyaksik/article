import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import MainPage from './MainPage'

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK)]
