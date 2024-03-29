import { Suspense, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { type IStateSchema, StoreProvider } from 'app/providers/storeProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface IComponentRenderOptions {
  route: string
  initialState?: DeepPartial<IStateSchema>
}

export function ComponentRender (component: ReactNode, options: IComponentRenderOptions) {
  const { route, initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
          <Suspense fallback={<div></div>}>
            <I18nextProvider i18n={i18nForTests}>
              {component}
            </I18nextProvider>
          </Suspense>
      </StoreProvider>
    </MemoryRouter>
  )
}
