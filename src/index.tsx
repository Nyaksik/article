import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/themeProvider'
import App from 'app/App'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/errorBoundery'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/storeProvider'

render(
  <BrowserRouter>
    <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
