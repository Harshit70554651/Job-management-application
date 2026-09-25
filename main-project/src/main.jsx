import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Authprovider from './Componants/Auth/TaskList/Authprovider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Authprovider> 
    <App/>
  </Authprovider>

)
