import cls from './LoginModal.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/modal/Modal'
import { LoginForm } from 'features/authByUserName/ui/loginForm/LoginForm'

interface ILoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
  const {
    className = '',
    isOpen,
    onClose
  } = props

  return (
    <Modal lazy={true} isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
      <LoginForm></LoginForm>
    </Modal>
  )
}
