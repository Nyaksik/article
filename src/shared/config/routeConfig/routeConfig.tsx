import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/mainPage'
import { AboutPage } from 'pages/aboutPage'
import { NotFoundPage } from 'pages/notFoundPage'
import { ProfilePage } from 'pages/profilePage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: RouterPath.profile,
    element: <ProfilePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />
  }
}
