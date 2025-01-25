import React, { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";

const Input = ({type, placeholder,name,onChange, extraClass, required}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      {type === "password" ?
        <label className='relative'>
          <input type={showPassword ? "text" : type} required={required} placeholder={placeholder} name={name} onChange={onChange} className={`w-[350px] ${extraClass} outline-none border-[2px] text-[20px] text-[#A7A7A7] border-[#A7A7A7] h-[45px] p-3 rounded-[5px]`}/>
          <div onClick={()=> setShowPassword(!showPassword)} className='absolute cursor-pointer my-auto top-3 right-2'>
              {showPassword ? <FaEyeSlash size={"25px"}/> :
              <IoIosEye size={"25px"}/>}
          </div>
        </label>
      :
      <input type={type} required={required} name={name} onChange={onChange} placeholder={placeholder} className={`w-[350px] ${extraClass} outline-none border-[2px] text-[20px] text-[#A7A7A7] border-[#A7A7A7] h-[45px] p-5 rounded-[5px]`}/>
      }
    </>
  )
}

export default Input
