import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/modal/Modal'
import { LoginForm } from 'features/authByLogin/ui/loginForm/LoginForm'

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
    <Modal lazy={true} isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
      <LoginForm></LoginForm>
    </Modal>
  )
}
