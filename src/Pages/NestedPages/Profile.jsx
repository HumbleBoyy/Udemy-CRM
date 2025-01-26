import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../Context/Context'

const Profile = () => {
  const {id} = useParams()
  const {list} = useContext(Context)
  const singleStaff = list.find(item => item.id == id)
  console.log(singleStaff)
  return (
    <>
    Profile
    </>
  )
}

export default Profile
