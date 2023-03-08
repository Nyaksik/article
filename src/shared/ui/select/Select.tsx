import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'

export interface ISelectOption {
  value: string
  content: string
}

interface ISelectProps {
  className?: string
  label?: string
  options?: ISelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: ISelectProps) => {
  const { className = '', readonly, label, onChange, value, options } = props

  const optionsList = useMemo(() => {
    return options?.map(({ value, content }: ISelectOption) => {
      return <option className={cls.option} value={value} key={value}>{content}</option>
    })
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && (
        <span className={cls.label}>{`${label}>`}</span>
      )}

      <select className={cls.select} disabled={readonly} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  )
})
