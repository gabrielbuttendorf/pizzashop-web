import './global.css'

import { BrowserRouter } from 'react-router'
import { Toaster } from 'sonner'

import { AppRoutes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <AppRoutes />
    </BrowserRouter>
  )
}
