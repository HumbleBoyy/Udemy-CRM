import React, { useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Context/Context.jsx'
import Logo from "./assets/Logos/MainLogo.svg"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TokenContext>
        <div className='app_wrapper'>
          <App />   
        </div>
        <div className='message_wrapper'>
        <div className='fixed inset-0   justify-center top-56 items-center w-full z-0'>
                 <img className="logo_animated mx-auto opacity-15" src={Logo} alt="Logo" width={200} height={200} />
              </div>
           <h1 className='text-[20px] font-bold text-white z-50'><span className='text-red-600'>!</span>Ekran sig'imi 1110px-dan kichik</h1>
        </div>
      </TokenContext>
    </BrowserRouter>
)
