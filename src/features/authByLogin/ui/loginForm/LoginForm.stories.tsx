import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import LoginForm from './LoginForm'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [storeDecorator({
  login: { login: '123', password: '123' }
})]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [storeDecorator({
  login: { login: '123', password: '123', error: 'Ошибка' }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [storeDecorator({
  login: { login: '123', password: '123', isLoading: true }
})]
