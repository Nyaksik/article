import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LangSwitcher } from './LangSwitcher'

import { Theme } from 'app/providers/themeProvider'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'

export default {
  title: 'widget/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK)]
