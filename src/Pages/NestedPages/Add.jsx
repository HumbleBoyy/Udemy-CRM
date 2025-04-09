import React, { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { Context } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const AddList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState(null)
  const {list, setList} = useContext(Context)

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [subjectId, setSubjectId] = useState(null)
  const [subject, setSubject] = useState(null)
  const [about, setAbout] = useState(null)
  const [classs, setClasss] = useState(null)
  const [gender, setGender] = useState(null)
  const [age, setAge] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const data = {
      id:list.length ? list[list.length -1].id + 1 : 1,
      name,
      email,
      subject, 
      subjectId,
      about,
      classs,
      gender,
      age,
      image:image
    }
    setTimeout(()=> {
      setIsLoading(false)
      e.target.reset()
      toast.success("Successfully added")
      setList([...list, data])
    }, 500)

    setTimeout(()=> {
       navigate(-1)
    },1500)
    

  }
  return (
    <>
     <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
        <div className='flex justify-between items-center'>
           <h2 className='text-[20px] font-semibold text-[#4F4F4F]'>Add Teacher</h2>
           <div className='flex items-center gap-1'>
               <Button type={"button"} extraClass={"!w-[150px] bg-red-600"} text={"Cancel"} onClick={()=>navigate(-1)}/>
               <Button isLoading={isLoading} type={"submit"} extraClass={"!w-[150px]"} text={"Save"}/>
           </div>
        </div>
        <div className='flex justify-evenly gap-5'>
           <div className='flex flex-col gap-5'>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Full Name</label>
                  <Input required type={"text"} value={name} onChange={(e) => setName(e.target.value)} extraClass={"focus:border-blue-600   !w-[400px]"} placeholder={"Full Name"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Email</label>
                  <Input required type={"email"} value={email} onChange={(e)=> setEmail(e.target.value)} extraClass={"focus:border-blue-600  !w-[400px]"} placeholder={"Email"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Subject</label>
                  <select value={subject} onChange={(e) => setSubject(e.target.value)} className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option value={"non"}>Subject</option>
                     <option value={subjectId} onClick={(e)=> setSubjectId(e.target.value)}>Biology</option>
                     <option value={subjectId} onClick={(e)=> setSubjectId(e.target.value)}>Chemistry</option>
                     <option value={subjectId} onClick={(e)=> setSubjectId(e.target.value)}>Mathematics</option>
                     <option value={subjectId} onClick={(e)=> setSubjectId(e.target.value)}>Astronomy</option>
                  </select>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>About</label>
                   <textarea value={about} onChange={(e)=> setAbout(e.target.value)} className='resize-none border-[2px] border-[#4F4F4F] h-[150px] text-[20px] p-2 rounded-[5px] w-[400px]' placeholder='About'>
                  </textarea>
               </div>
           </div>
           <div className='flex flex-col gap-5'>
           <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Class</label>
                  <select value={classs} onChange={(e)=> setClasss(e.target.value)} className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option value="2">Class</option>
                     <option value="JSS 1">JSS 1</option>
                     <option value="JSS 2">JSS 2</option>
                     <option value="JSS 3">JSS 3</option>
                     <option value="JSS 4">JSS 4</option>
                  </select>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Gender</label>
                  <select value={gender} onChange={(e)=> setGender(e.target.value)} className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option value="on">Gender</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                  </select>
            </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Age</label>
                  <Input required type={"number"} value={age} onChange={(e)=> setAge(e.target.value)} extraClass={"focus:border-blue-600  !w-[400px]"} placeholder={"Age"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F] flex flex-col cursor-pointer font-bold'>Import image
                  <Input onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} required type={"file"} extraClass={"hidden"}/>
                  </label>
               </div>
           </div>
        </div>
     </form>
    </>
   
  )
}

export default AddList
