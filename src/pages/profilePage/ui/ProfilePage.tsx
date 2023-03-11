import { type FC, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer, ValidateProfileError
} from 'entities/profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/currency'
import { type Country } from 'entities/country'
import { Text, TextTheme } from 'shared/ui/text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateError = useSelector(getProfileValidateError)

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны')
  }

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ last: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    if (/\D/.test(value || '')) return

    dispatch(profileActions.updateProfile({ age: Number(value) }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [dispatch])

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [dispatch])

  useEffect(() => {
    if (__PROJECT__ === 'storybook') return

    // @ts-expect-error
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div>
        <ProfilePageHeader/>

        {validateError?.length && validateError.map((err, index) => {
          return <Text text={validateErrorTranslates[err]} theme={TextTheme.ERROR} key={index}/>
        })}

        <ProfileCard readonly={readonly} onChangeCountry={onChangeCountry} onChangeCurrency={onChangeCurrency}
                     onChangeAvatar={onChangeAvatar}
                     onChangeUsername={onChangeUsername}
                     onChangeAge={onChangeAge} onChangeCity={onChangeCity} onChangeFirstname={onChangeFirstname}
                     onChangeLastname={onChangeLastname}
                     data={formData}
                     isLoading={isLoading} error={error}/>
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
