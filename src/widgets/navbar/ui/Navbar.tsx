import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { type FC, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/authByLogin'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/user'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const userAuthData = useSelector(getUserAuthData)
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const logout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={logout}>
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>
    </div>
  )
}
