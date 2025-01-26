import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../Context/Context'
import My from "../../assets/Images/my.jpg"
import { PiStudentBold } from 'react-icons/pi'
import { LuPhoneCall } from 'react-icons/lu'
import { SiImessage } from 'react-icons/si'
import Button from '../../Components/Button/Button'

const Profile = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {list} = useContext(Context)
  return (
    <>
       <div className='flex justify-center px-20 py-15 gap-15 w-full'>
          <div className='flex flex-col gap-5'>
            <div className='w-[280px] h-[280px]'><img src={My} alt="UserImage" className='rounded-[50%] w-full h-full object-cover'/></div>
              <div className='text-center gap-1'>
                   <strong className='font-bold text-[20px]'>Asadulloh Abdurakhmonov</strong>
                   <p className='font-semibold text-[15px]'>asadulloh@email.gmail.com</p>
              </div>
              <div className='flex gap-2 p-5'>
                 <div className='flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-md p-2 text-[30px] text-[#8A8A8A]'><PiStudentBold /></div>
                 <div className='flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-md p-2 text-[30px] text-[#8A8A8A]'><LuPhoneCall /></div>
                 <div className='flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-md p-2 text-[30px] text-[#8A8A8A]'><SiImessage /></div>
              </div>
          </div>

          <div className='flex flex-col gap-10'>
             <h2 className='font-bold text-[20px]'>About</h2>
             <p className='font-semibold text-[16px] text-[#A7A7A7] w-[60%]'>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. 
                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                Nulla Lorem mollit cupidatat irure.
                Laborum magna nulla duis ullamco cillum dolor. 
                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
          
          <div className='flex flex-col gap-5'>
             <div className='flex items-center gap-2'>
                <div className='flex flex-col gap-2'>
                   <h2 className='text-[20px] font-bold'>Subject</h2>
                   <strong className='text-[15px] text-[#A7A7A7]'>English</strong>
                </div>
                <div className='flex flex-col gap-2'>
                   <h2 className='text-[20px] font-bold'>Class</h2>
                   <strong className='text-[15px] text-[#A7A7A7]'>JSS 1</strong>
                </div>
             </div>
             <div className='flex items-center gap-2'>
                <div className='flex flex-col gap-2'>
                   <h2 className='text-[20px] font-bold'>Age</h2>
                   <strong className='text-[15px] text-[#A7A7A7]'>21</strong>
                </div>
                <div className='flex flex-col gap-2'>
                   <h2 className='text-[20px] font-bold'>Gender</h2>
                   <strong className='text-[15px] text-[#A7A7A7]'>Male</strong>
                </div>
             </div>
             <Button text={"Cancel"} onClick={()=> navigate(-1)}/>
          </div>
          </div>
       </div>
    </>
  )
}

export default Profile
