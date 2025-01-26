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

const Lists = () => {
  const teachersList = JSON.parse(localStorage.getItem("list"))
  const {list, setList} = useContext(Context)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


// Table Function
  const dataSource = teachersList.map((data, index) => ({
    key: index.toString(),
    name: data.fullName,   
    age: data.age,         
    address: data.address || 'N/A', 
    subject: data.subject, 
    class: data.class,
    email: data.email,
    gender: data.gender,
    image: data.image
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
      dataIndex: 'class',
      key: 'class',
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
          <RiEdit2Fill onClick={()=> setEditModal(true)} className='text-blue-600 text-[25px] cursor-pointer'/>
          <CiCircleMore onClick={()=> navigate(PATH.teachersProfile)} className='text-[25px] cursor-pointer' />
          <MdDelete onClick={()=> setDeleteModal(true)} className='text-red-600 text-[25px] cursor-pointer' />
        </div>
      )
    },
];

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
      setOpenModal(false)
     }, 1500)
}

// Handle More

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }}/> 

      <Modal openModal={deleteModal} extraClass={"flex flex-col items-center !h-[150px]"} setOpenModal={setDeleteModal}>
            <h2 className='p-4 text-[20px] font-semibold'>Do you want to delete?</h2>
            <div className='flex gap-2'>
            <Button extraClass={"!w-[150px]"} onClick={()=>setDeleteModal(false)} text={"Cancel"}/>
            <Button isLoading={isLoading} extraClass={"!w-[150px] !bg-red-600"} text={"Delete"} onClick={handleDelete}/>
          </div>
      </Modal>
      <Modal openModal={editModal} extraClass={"flex flex-col items-center !p-2"} setOpenModal={setEditModal}>
           
      </Modal>
    </>
  )
}

export default Lists
