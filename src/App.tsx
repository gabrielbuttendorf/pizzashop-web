import './global.css'

import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <BrowserRouter>
        <Toaster richColors />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
