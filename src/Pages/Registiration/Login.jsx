import React, { useContext, useState } from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../../Context/Context'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setToken} = useContext(Context)
  const navigate = useNavigate()

  const handleLogIn = (e) => {
     e.preventDefault()
     setIsLoading(true)
     const data = {
      login:e.target.login.value,
      password:e.target.password.value
     }

     if(users.length > 0){
       const findUser = users.find(item => item.login === data.login && item.password === data.password)
       if(findUser){
          setTimeout(()=> {
            toast.success("Welcome To Your Account")
          },500)
          setTimeout(()=> {
             setIsLoading(false)
             setToken(data)
             e.target.reset()
          },1000)
       }else{
          setTimeout(()=> {
            toast.error("User is not defined")
            e.target.reset()
            setIsLoading(false)
          }, 1000)
       }
     }
  }
  return (
    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <div className='flex justify-center gap-10 flex-col items-center h-[100vh]'>
       <h1 className='font-bold text-[#4F4F4F] text-[36px]'>Welcome, Log into you account</h1>
       <form onSubmit={handleLogIn} className='flex flex-col gap-5 items-center'>
          <p className='text-[25px] text-center'>It is our great pleasure to have <br /> you on board! </p>
          <Input required type={"text"} placeholder={"Enter your Login"} name={"login"}/>
          <Input required type={"password"} placeholder={"Enter Password"} name={"password"}/>
          <Button isLoading={isLoading} type={"submit"} text={"Login"}/>
          <Link to={PATH.register} className='text-[20px] text-blue-600 font-bold'>Sign Up</Link>
       </form>
    </div>
  </>
  )
}

export default Login
