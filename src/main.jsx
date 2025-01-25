import React, { useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TokenContext>
        <App />   
      </TokenContext>
    </BrowserRouter>
)
