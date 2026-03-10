import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { AppRoutes } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <BrowserRouter>
          <Toaster richColors />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
