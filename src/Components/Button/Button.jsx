import React from "react"
import Loading from "../../assets/Images/loading.png"

const Button = ({type,onClick,text, isLoading}) => {
  return (
    <button type={type} onClick={onClick} className={`w-[350px] flex justify-center items-center cursor-pointer hover:opacity-[70%] outline-none text-[20px] rounded-[5px] text-white bg-[#2D88D4]  h-[45px]`}>
       {isLoading ? <img src={Loading}  alt="Loading" width={30} height={30} className="flex mx-auto scale-[1.5]"/> : text}
    </button>
  )
}

export default Button
