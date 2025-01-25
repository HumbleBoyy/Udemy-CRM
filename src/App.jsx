import React, { useContext } from 'react'
import { Context } from './Context/Context'
import DashboardRoutes from './Pages/Dashboard/index.jsx'
import RegisterRoutes from './Pages/Registiration/index.jsx'
// import "./App.css"
const App = () => {
  const {token} = useContext(Context)
  if(token){
   return <DashboardRoutes/>
  }else{
   return  <RegisterRoutes/>
  }
}

export default App
