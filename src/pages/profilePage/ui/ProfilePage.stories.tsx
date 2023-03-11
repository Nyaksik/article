import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ProfilePage from './ProfilePage'

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import AvatarImg from 'shared/assets/test/AvatarImg.jpeg'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [storeDecorator({
  profile: {
    form: {
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
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})]
