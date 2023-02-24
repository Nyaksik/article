import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'
import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from 'app/providers/router'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/user'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>

        <div className="content-page">
          <Sidebar/>

          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
