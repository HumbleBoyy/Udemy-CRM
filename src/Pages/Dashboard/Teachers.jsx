import React from 'react'
import Empty from '../../Components/Empty/Empty'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { Link, Outlet } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'

const Teachers = () => {
  return (
    <>
  
    <div className='p-6'>
      <header className='flex justify-between items-center'>
         <h2 className='text-[20px] font-semibold text-[#4F4F4F]'>Teachers</h2>
         <Link to={PATH.teachersAdd}><Button extraClass={"!w-[150px]"} text={"Add Teachers"}/></Link>
      </header>
      <div className='p-2'>
        <Input extraClass={"!w-full search !px-10"} type={"text"} placeholder={"Search for a student by name or email"}/>
      </div>
      <Empty/>
    </div>
    <Outlet/>
    </>
  )
}

export default Teachers
