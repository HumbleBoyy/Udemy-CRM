import React from 'react'
import InfoHome from '../../Components/InfoHome/InfoHome'
import { IoPersonAddSharp } from 'react-icons/io5'
import { RiBankLine } from 'react-icons/ri'
import { PiStudentDuotone } from 'react-icons/pi'

const Home = () => {
  return (
    <div className='flex flex-col justify-center mt-10'>
        <div className='flex items-center flex-col text-[#4F4F4F]'>
           <h2 className='text-[36px] text-bold'>Welcome to your dashboard, Udemy school</h2>
           <p className='text-[25px] text-bold'>Uyo/school/@teachable.com</p>
        </div>
       <div className='flex flex-col gap-5 px-30 py-10'>
         <InfoHome icon={<IoPersonAddSharp />} text={"Add other admins"} text2={"Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!"}/>
         <InfoHome icon={<RiBankLine />} text={"Add classes"} text2={"Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!"}/>
         <InfoHome icon={<PiStudentDuotone />} text={"Add students"} text2={"Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!"}/>
       </div>
    </div>
  )
}

export default Home
