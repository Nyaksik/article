import cls from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IInputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  lazy?: boolean
  readonly?: boolean
}

export const Input = memo((props: IInputProps) => {
  const {
    className = '',
    value,
    type = 'text',
    placeholder,
    onChange,
    autoFocus,
    readonly,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const isCaretVisable = isFocused && !readonly

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)

      ref.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder &&
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      }

      <div className={cls.caretWrapper}>
        <input ref={ref} {...otherProps} readOnly={readonly} value={value} onSelect={onSelect} onBlur={onBlur}
               onFocus={onFocus}
               onChange={onChangeHandler} type={type}
               className={classNames(cls.input, { [cls.readonly]: readonly }, [className])}/>

        {isCaretVisable && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
      </div>
    </div>
  )
})
