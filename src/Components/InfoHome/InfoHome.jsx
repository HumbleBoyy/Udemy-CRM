import React from 'react'

const InfoHome = ({icon,text,text2}) => {
  return (
    <div className='flex gap-5'>
       <div className='bg-[#EFF3FA] w-[40px] h-[40px] p-2 text-[30px] flex items-center text-[#13296A] rounded-md'>{icon}</div>
       <div className='flex flex-col gap-5'>
          <h2 className='text-[25px] text-[#4F4F4F]'>{text}</h2>
          <p className='text-15px w-[]'>Create rich course content and coaching products for your students. <br /> When you give them a pricing plan, they’ll appear on your site!</p>
       </div>
    </div>
  )
}

export default InfoHome
