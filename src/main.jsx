import React, { useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TokenContext>
        <div className='app_wrapper'>
          <App />   
        </div>
        <div className='message_wrapper'>
           <h1 className='text-[20px] font-bold text-white'><span className='text-red-600'>!</span>Ekran sig'imi 1106px-dan kichik</h1>
        </div>
      </TokenContext>
    </BrowserRouter>
)
