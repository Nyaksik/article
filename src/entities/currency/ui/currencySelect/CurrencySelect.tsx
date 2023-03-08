import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/select/Select'
import { Currency } from 'entities/currency'
import { useTranslation } from 'react-i18next'

interface ICurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  {
    value: Currency.RUB,
    content: Currency.RUB
  },
  {
    value: Currency.EUR,
    content: Currency.EUR
  },
  {
    value: Currency.USD,
    content: Currency.USD
  }
]

export const CurrencySelect = memo((props: ICurrencySelectProps) => {
  const { t } = useTranslation()

  const { value, onChange, readonly } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
      <Select label={t('Валюта')} readonly={readonly} value={value} onChange={onChangeHandler} options={options} />
  )
})
