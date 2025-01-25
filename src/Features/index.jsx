import React from 'react'
import Navbar from '../Modules/Navbar'
import Header from '../Modules/Header'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex px-10'>
       <Navbar/>
       <div>
         <Header/>
         {children}
       </div>
    </div>
  )
}

export default DashboardLayout
