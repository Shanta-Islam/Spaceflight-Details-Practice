import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Home/Home.jsx'
import { AppProvider } from './contexts/Context'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AppProvider>
      <Home></Home>
     </AppProvider>

  </React.StrictMode>,
)
