import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { Table } from 'antd'
import { CiCircleMore } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'

const Lists = () => {
  const teachersList = JSON.parse(localStorage.getItem("list"))
  
  const navigate = useNavigate()
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
      render:() =>(
        <>
          <CiCircleMore  size={"30px"} cursor={"pointer"}/>
        </>
      )
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }}/> 
    </>
  )
}

export default Lists
