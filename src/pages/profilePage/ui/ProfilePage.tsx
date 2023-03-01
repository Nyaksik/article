import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/profile'

const reducers: ReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div>
        {t('Страница профиля')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
