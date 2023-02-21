import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { type FC, useCallback, useState } from 'react'
import { Modal } from 'shared/ui/modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque laboriosam nam repudiandae. Ab ad,
        culpa, enim error id, ipsa libero minus nostrum odio perspiciatis sed sunt unde veniam vero.q
      </Modal>
    </div>
  )
}
