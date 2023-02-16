import cls from './PageLoader.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/loader/Loader'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className || ''])}>
      <Loader />
    </div>
  )
}
