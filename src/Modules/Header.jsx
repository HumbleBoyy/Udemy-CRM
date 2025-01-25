import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../Components/Button/Button'
import { useContext } from 'react'
import { Context } from '../Context/Context'
import Modal from '../Components/Modal/Modal'
import { MdNotificationAdd } from 'react-icons/md'
import { PATH } from '../hooks/usePath'

const Header = () => {
    const path = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const {setToken} = useContext(Context)
    const [openModal, setOpenModal] = useState(false)

    const handleLogout = () => {
      setIsLoading(true)

      setTimeout(()=> {
         setIsLoading(false)
         setToken(null)
      },1000)
    
    }
    
  return (
    <>
    <header className='w-full bg-[#FCFAFA] p-5'>
       <div className='flex justify-between items-center'>
          {path.pathname === PATH.home
           ?
           <>
            <p className='text-[16px]'>Learn  how to launch faster <br />
               watch our webinar for tips from our experts and get a limited time offer.</p>
           <div className='flex items-center gap-5'>
            <MdNotificationAdd size={"25px"}/>
             <Button extraClass={"!w-[200px]"} type={"button"}  onClick={()=> setOpenModal(true)} text={"Log Out"}/>
           </div>
           </>
           :
           <>
           <div/>
              <div className='flex items-center gap-5 '>
                  <MdNotificationAdd size={"25px"}/>
                  <Button extraClass={"!w-[200px]"} type={"button"}  onClick={()=> setOpenModal(true)} text={"Log Out"}/>
              </div>
            </>
          }
       </div>
    </header>
    <Modal openModal={openModal} extraClass={"!h-[200px]"} setOpenModal={setOpenModal}>
        <div className='flex flex-col items-center justify-center p-5'>
            <h2 className='text-[25px]'>Do you want to log out?</h2>
            <div className='flex items-center gap-3 mt-5'>
                <Button onClick={()=> setOpenModal(false)} text={"Cancel"} extraClass={"!w-[150px]"}/>
                <Button onClick={handleLogout} isLoading={isLoading} text={"Log out"} extraClass={"!w-[150px] !bg-red-600"}/>
            </div>
        </div>
    </Modal>
 </>
  )
}

export default Header
