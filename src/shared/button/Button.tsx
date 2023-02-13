import classNames from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const { className = '', children, theme, ...otherProps } = props

  console.log(theme)

  return (
    <button className={classNames(cls.Button, {}, [className || '', cls[theme || '']])} {...otherProps}>
      {children}
    </button>
  )
}