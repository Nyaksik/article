import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import AvatarImg from 'shared/assets/test/AvatarImg.jpeg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Light = Template.bind({})
Light.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.UKRAINE,
    last: '123',
    first: '12',
    city: '5455',
    currency: Currency.RUB,
    avatar: AvatarImg
  }
}

export const Error = Template.bind({})
Error.args = { error: 'error' }

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
