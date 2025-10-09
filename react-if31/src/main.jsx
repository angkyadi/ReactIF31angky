import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"

import Login from './pages/public/authentication/login/login'
import Logo from './components/basic/logo/logo'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Logo/>
    <Login/>
  </StrictMode>,
)
