import React from 'react'
import emptyImage from "../../assets/Images/empty.png"

const Empty = () => {
  return (
    <div className='flex items-center justify-center p-5'>
       <img src={emptyImage} alt='EmptyImage' width={"full"} height={420}/>
    </div>
  )
}

export default Empty
