import React, { useContext, useState } from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'
import { Context } from '../../Context/Context'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setUsers} = useContext(Context)
  const navigate = useNavigate()

  const handleSubmitSign = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
       email:e.target.email.value,
       login:e.target.login.value,
       password:e.target.password.value
    }

    setUsers([...users, data])
    setTimeout(()=> {
        toast.success("Account Created Successfully")
    },500)

    setTimeout(()=> {
      e.target.reset()
      setIsLoading(false)
      navigate(-1)
    },1500)
  }
  return (
    <>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
  
    <div className='flex justify-center gap-10 flex-col items-center h-[100vh]'>
    <h1 className='font-bold text-[#4F4F4F] text-[36px]'>Welcome, Sign up</h1>
    <form onSubmit={handleSubmitSign} className='flex flex-col gap-5 items-center'>
       <p className='text-[25px] text-center'>It is our great pleasure to have <br /> you on board! </p>
       <Input required type={"email"} placeholder={"Enter Your Email"} name={"email"}/>
       <Input required type={"text"} placeholder={"Enter Your Login"} name={"login"}/>
       <Input required type={"password"} placeholder={"Enter Password"} name={"password"}/>
       <Button isLoading={isLoading} type={"submit"} text={"Sign Up"}/>
       <Link to={PATH.home} className='text-[20px] text-blue-600 font-bold'>Sign In</Link>
    </form>
 </div>
 </>
  )
}

export default Register
