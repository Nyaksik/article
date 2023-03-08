import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/text/Text'
import { Input } from 'shared/ui/input/Input'
import { type IProfile } from 'entities/profile'
import { Loader } from 'shared/ui/loader/Loader'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { type Currency } from 'entities/currency/model/types/currency'
import { CurrencySelect } from 'entities/currency'
import { type Country } from 'entities/country/model/types/country'
import { CountrySelect } from 'entities/country'

interface IProfileCardProps {
  className?: string
  data?: IProfile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { t } = useTranslation('profile')

  const {
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry
  } = props

  const {
    className = '',
    data,
    isLoading,
    error
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader/>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text title={t('Произошла непредвиденная ошибка')} text={error} theme={TextTheme.ERROR}
              align={TextAlign.CENTER}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, { [cls.edit]: !readonly }, [className])}>

      <div className={cls.content}>
        <div className={cls.items}>
          {data?.avatar && <Avatar src={data.avatar}/>}

          <Input value={data?.first} readonly={readonly} onChange={onChangeFirstname} placeholder={t('Имя')}/>

          <Input value={data?.last} readonly={readonly} onChange={onChangeLastname} placeholder={t('Фамилия')}/>

          <Input value={data?.username} readonly={readonly} onChange={onChangeUsername} placeholder={t('Никнейм')}/>

          <Input value={data?.avatar} readonly={readonly} onChange={onChangeAvatar}
                 placeholder={t('Ссылка на аватар')}/>

          <Input value={data?.age as string | undefined} onChange={onChangeAge} readonly={readonly}
                 placeholder={t('Возраст')}/>

          <Input value={data?.city} readonly={readonly} onChange={onChangeCity} placeholder={t('Город')}/>

          <CountrySelect value={data?.country} readonly={readonly} onChange={onChangeCountry}/>

          <CurrencySelect value={data?.currency} readonly={readonly} onChange={onChangeCurrency}/>
        </div>
      </div>
    </div>
  )
}
