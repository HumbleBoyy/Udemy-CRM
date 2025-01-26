import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { Table } from 'antd'
import { CiCircleMore } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal'
import Button from '../../Components/Button/Button'
import toast from 'react-hot-toast'

const Lists = () => {
  const teachersList = JSON.parse(localStorage.getItem("list"))
  const {list, setList} = useContext(Context)
  const [openModal, setOpenModal] = useState(false)
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
        <>
          <CiCircleMore onClick={()=> setOpenModal(true)} size={"30px"} cursor={"pointer"}/>
        </>
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


  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }}/> 
      <Modal openModal={openModal} extraClass={"flex flex-col items-center !h-[150px] !p-2"} setOpenModal={setOpenModal}>
          
            <h2 className='p-4 text-[20px] font-semibold'>Choose an action</h2>
            <div className='flex gap-2'>
            <Button extraClass={"!w-[150px] "} text={"More"}/>
            <Button extraClass={"!w-[150px] !bg-green-600"} text={"Edit"}/>
            <Button isLoading={isLoading} extraClass={"!w-[150px] !bg-red-600"} text={"Delete"} onClick={handleDelete}/>
          </div>
      </Modal>
    </>
  )
}

export default Lists
