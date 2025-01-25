import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { registerRoutes } from '../../hooks/useRoute'

const RegisterRoutes = () => {
  return (
    <Routes>
        {registerRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default RegisterRoutes
