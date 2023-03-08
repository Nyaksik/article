import cls from './Text.module.scss'
import { type FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  START = 'start',
  END = 'end',
  CENTER = 'center'
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text: FC<ITextProps> = memo(
  (props: ITextProps) => {
    const {
      className = '',
      title,
      text,
      theme = TextTheme.PRIMARY,
      align = TextAlign.START
    } = props

    return (
      <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}

        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)
