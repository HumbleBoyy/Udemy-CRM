import React, { useContext } from 'react'
import Empty from '../../Components/Empty/Empty'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'
import Lists from './Lists'
import { Context } from '../../Context/Context'
import { Toaster } from 'react-hot-toast'

const Teachers = () => {
const path = useLocation()
const navigate = useNavigate()
const {list} = useContext(Context)
  return (
    <>
    
    <Toaster
          position="top-center"
          reverseOrder={false}
        />
    <div className='p-6'>
    
      {(path.pathname === PATH.teachersAdd) || (path.pathname === PATH.teachersProfile) ?
        <Outlet/>
       :
       <>
      <header className='flex justify-between items-center'>
        <h2 className='text-[20px] font-semibold text-[#4F4F4F]'>Teachers</h2>
        <Button extraClass={"!w-[150px]"} text={"Add Teachers"} onClick={()=> navigate(PATH.teachersAdd)}/>
     </header>
      <div className='p-2'>
        <Input extraClass={"!w-full search !px-10"} type={"text"} placeholder={"Search for a student by name or email"}/>
      </div> 

     {list.length !== null ?
     <Lists/>
       :
      <Empty/>
     }
    </>
      }  

    </div>
    </>
  )
}

export default Teachers
