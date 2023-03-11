import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Avatar } from './Avatar'
import AvatarImg from '../../assets/test/AvatarImg.jpeg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: AvatarImg
}
