import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardList } from '../../hooks/useRoute'
import DashboardLayout from '../../Features'

const DashboardRoutes = () => {
  return (
   <DashboardLayout>
        <Routes>
         {dashboardList.map(item => <Route key={item.id} element={item.element} path={item.path}/>)}
       </Routes>
   </DashboardLayout>
  )
}

export default DashboardRoutes
