import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque laboriosam nam repudiandae.'
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque laboriosam nam repudiandae.'
}
Dark.decorators = [themeDecorator(Theme.DARK)]
