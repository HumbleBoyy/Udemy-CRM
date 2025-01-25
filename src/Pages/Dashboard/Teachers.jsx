import React from 'react'
import Empty from '../../Components/Empty/Empty'
import Button from '../../Components/Button/Button'

const Teachers = () => {
  return (
    <div className='p-5'>
      <header className='flex justify-between items-center'>
         <h2 className='text-[20px] font-semibold text-[#4F4F4F]'>Teachers</h2>
         <Button extraClass={"!w-[150px]"} text={"Add Teachers"}/>
      </header>
      <Empty/>
    </div>
  )
}

export default Teachers
