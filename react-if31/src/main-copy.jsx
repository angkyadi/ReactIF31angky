import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"
import UserProfile from './components/basic/UserProfile'
import Logo from './components/basic/logo/logo'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className="bg-pink-500"> 
      <div>
        Welcome
      </div>
      <UserProfile/>
      <UserProfile avatar='https://avatar.iran.liara.run/public/23' username='Angky'email='angky@gmail.com'/>
      <Logo/>

    </div>
    
  </StrictMode>,
)
