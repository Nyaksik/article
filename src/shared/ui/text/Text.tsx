import cls from './Text.module.scss'
import { type FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<ITextProps> = memo(
  (props: ITextProps) => {
    const {
      className = '',
      title,
      text,
      theme = TextTheme.PRIMARY
    } = props

    return (
      <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}

        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)
