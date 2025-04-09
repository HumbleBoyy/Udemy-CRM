import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { Table } from 'antd'
import { CiCircleMore } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal'
import Button from '../../Components/Button/Button'
import toast from 'react-hot-toast'
import { PATH } from '../../hooks/usePath'
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
import Input from '../../Components/Input/Input'

const Lists = () => {
  const teachersList = JSON.parse(localStorage.getItem("list"))
  const {list, setList} = useContext(Context)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  console.log(teachersList)
  // Handle Delete
  const handleDelete = (id) => {
    const findDelete = list.findIndex(item => item.id == id)
    setIsLoading(true)
    setTimeout(()=> {
      toast.success("Item Successfully Deleted!")
      setIsLoading(false)
    },500)
    setTimeout(()=> {
     list.splice(findDelete, 1)
     setList([...list])
     setDeleteModal(false)
    }, 1500)
}

// Table Function
  const dataSource = teachersList.map((data, index) => ({
    key: index.toString(),
    name: data.name,   
    age: data.age,         
    address: data.address || 'N/A', 
    subject: data.subject, 
    classs: data.classs,
    email: data.email,
    gender: data.gender,
    image: data.image !== undefined ? data.image : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
  }));
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img
          src={image}
          alt="Profile"
          width={50}
          height={50}
          style={{ borderRadius: '50%' }}
        />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Class',
      dataIndex: 'classs',
      key: 'classs',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render:(id) =>(
        <div className='flex items-center gap-1'>
          <RiEdit2Fill onClick={()=> handleEdit(true)} className='text-blue-600 text-[25px] cursor-pointer'/>
          <CiCircleMore onClick={()=> navigate(`/${PATH.teachersMore}/${id}`)} className='text-[25px] cursor-pointer' />
          <MdDelete onClick={()=> setDeleteModal(true)} className='text-red-600 text-[25px] cursor-pointer' />
        </div>
      )
    },
];
// Edit function
const [updateValue, setUpdateValue] = useState("")
const [upDateId, setUpdateId] = useState(null)
const [updateImageValue, setUpdatedImage] = useState(null)

const handleEdit = (id) => {
   setUpdateId(id)
   setEditModal(true)
   const findObj = list.find(item => item.id == id)
   setUpdateValue(findObj.fullName)
}
const handleEditSubmit = (e) => {
  e.preventDefault()
  const findObj2 = list.find(item=> item.id === upDateId)
  findObj2.fullName = updateValue
  setList([...list])
  setEditModal(false)
}






  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4 }}/> 

      <Modal openModal={deleteModal} extraClass={"flex flex-col items-center !h-[150px]"} setOpenModal={setDeleteModal}>
            <h2 className='p-4 text-[20px] font-semibold'>Do you want to delete?</h2>
            <div className='flex gap-2'>
            <Button extraClass={"!w-[150px]"} onClick={()=>setDeleteModal(false)} text={"Cancel"}/>
            <Button isLoading={isLoading} extraClass={"!w-[150px] !bg-red-600"} text={"Delete"} onClick={handleDelete}/>
          </div>
      </Modal>


      <Modal openModal={editModal} extraClass={"flex flex-col items-center !w-[950px] !h-[550px] !p-10"} setOpenModal={setEditModal}>
      <form onSubmit={handleEditSubmit} className='flex flex-col gap-5'>
        <div className='flex justify-evenly gap-5'>
           <div className='flex flex-col gap-5'>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Full Name</label>
                  <input value={updateValue} onChange={(e)=> setUpdateValue(e.target.value)} type={"text"} name={"fullName"} className={"focus:border-blue-600 h-[50px] outline border-[2px] border-slate-400 text-black text-[20px] p-2 rounded-[5px]  w-[400px]"} placeholder={"Full Name"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Email</label>
                  <input value={updateValue} onChange={(e)=> setUpdateValue(e.target.value)} type={"email"} name={"email"} className={"focus:border-blue-600 h-[50px] outline border-[2px] border-slate-400 text-black text-[20px] p-2 rounded-[5px]  w-[400px]"} placeholder={"Email"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Subject</label>
                  <select name="subject" className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option value="Subject">Subject</option>
                     <option value="Biology">Biology</option>
                     <option value="Chemistry">Chemistry</option>
                     <option value="Mathematics">Mathematics</option>
                     <option value="Astronomy">Astronomy</option>
                  </select>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>About</label>
                  <textarea name="about" className='resize-none border-[2px] border-[#4F4F4F] h-[150px] text-[20px] p-2 rounded-[5px] w-[400px]' placeholder='About'>
                  </textarea>
               </div>
           </div>
           <div className='flex flex-col gap-5'>
           <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Class</label>
                  <select name="class" className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option>Class</option>
                     <option value="JSS 1">JSS 1</option>
                     <option value="JSS 2">JSS 2</option>
                     <option value="JSS 3">JSS 3</option>
                     <option value="JSS 4">JSS 4</option>
                  </select>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Class</label>
                  <select name="gender" className='w-[400px] p-2 border-[2px] text-[#4F4F4F] border-[#4F4F4F] outline-none rounded-[5px] text-[20px]'>
                     <option>Gender</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                  </select>
            </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F]'>Age</label>
                  <input value={updateValue} onChange={(e)=> setUpdateValue(e.target.value)} type={"number"} name={"age"} className={"focus:border-blue-600 h-[50px] outline border-[2px] border-slate-400 text-black text-[20px] p-2 rounded-[5px]  w-[400px]"} placeholder={"Age"}/>
               </div>
               <div className='flex flex-col gap-1'>
                <label className='text-[20px] text-[#4F4F4F] flex flex-col cursor-pointer font-bold'>Import image
                  <input value={updateImageValue}  onChange={(e) => setUpdatedImage(URL.createObjectURL(e.target.files[0]))} required type={"file"} className={"hidden"}/>
                  </label>
               </div>
               <Button type={"submit"} isLoading={isLoading} text={"Edite"} extraClass={"!mt-20"}/>
           </div>
        </div>
     </form>
      </Modal>
    </>
  )
}

export default Lists
