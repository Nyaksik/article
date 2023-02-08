import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

const MainPage: FC = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      {t('Главная страница')}
    </div>
  )
}

export default MainPage
