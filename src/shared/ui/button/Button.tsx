import classNames from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className = '',
    square,
    size = ButtonSize.M,
    children,
    theme = ButtonTheme.CLEAR,
    disabled,
    type = 'button',
    ...otherProps
  } = props

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(cls.Button, {
        [cls.square]: square,
        [cls.disabled]: disabled
      }, [className, cls[size], cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
