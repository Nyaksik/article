import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/select/Select'
import { Country } from 'entities/country'
import { useTranslation } from 'react-i18next'

interface ICountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  {
    value: Country.RUSSIA,
    content: Country.RUSSIA
  },
  {
    value: Country.BELARUS,
    content: Country.BELARUS
  },
  {
    value: Country.UKRAINE,
    content: Country.UKRAINE
  },
  {
    value: Country.KAZAKHSTAN,
    content: Country.KAZAKHSTAN
  }
]

export const CountrySelect = memo((props: ICountrySelectProps) => {
  const { t } = useTranslation()

  const {
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select label={t('Страна')} readonly={readonly} value={value} onChange={onChangeHandler} options={options} />
  )
})
