import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/themeProvider'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'
import { type FC, Suspense } from 'react'
import { AppRouter } from 'app/providers/router'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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
