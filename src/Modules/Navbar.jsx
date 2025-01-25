import React from 'react'
import Logo from "../assets/Logos/MainLogo.svg"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import { navbarList } from '../hooks/useRoute'
const Navbar = () => {
  const path = useLocation()
  return (
    <div className='h-[100vh] overflow-y-auto w-[20%] bg-[#152259]'>
       <div className='flex flex-col'>
          <div className='flex flex-col items-center gap-5 p-10 border-b-2  border-slate-600'>
            <img src={Logo} alt="logo"  width={65} height={65}/>
            <Link to={PATH.home} className='font-bold text-[15px] text-white'>Udemy Inter. school</Link>
          </div>
        

            <ul className='flex flex-col p-10'>
                {navbarList.map(item => <NavLink key={item.id} to={item.path} className={"flex items-center gap-2 text-[20px] p-3 text-white"}>{item.icon} {item.title}</NavLink>)}
            </ul>
       </div>
    </div>
  )
}

export default Navbar
