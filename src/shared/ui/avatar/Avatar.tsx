import cls from './Avatar.module.scss'
import { type CSSProperties, type FC, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'

interface IAvatarProps {
  className?: string
  src: string
  alt?: string
  size?: number
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const {
    className = '',
    src,
    alt = 'avatar',
    size = 100
  } = props

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size])

  return <img style={styles} className={classNames(cls.Avatar, {}, [className])} src={src} alt={alt}/>
}
