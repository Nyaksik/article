import { Suspense, type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/modal/Modal'
import { Loader } from 'shared/ui/loader/Loader'
import { LoginFormAsync } from '../loginForm/LoginForm.async'

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose}></LoginFormAsync>
      </Suspense>
    </Modal>
  )
}
