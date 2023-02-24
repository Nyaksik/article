import cls from './Modal.module.scss'
import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/portal/Portal'

interface IModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal: FC<IModalProps> = (props: IModalProps) => {
  const { className = '', children, lazy, isOpen = false, onClose } = props

  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()

        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={(e) => { e.stopPropagation() }}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
