import cls from './Loader.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'

interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Loader, {}, [className || ''])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
