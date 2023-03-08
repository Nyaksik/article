import { Route, Routes } from 'react-router-dom'
import { type FC, Suspense, useMemo } from 'react'
import { routerConfig } from 'shared/config/routeConfig/routerConfig'
import { PageLoader } from 'widgets/pageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/user'

export const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      return !(route.action && !isAuth)
    })
  }, [isAuth])

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} path={path} element={(
          <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
              {element}
            </Suspense>
          </div>
        )} />
      ))}
    </Routes>
  )
}
