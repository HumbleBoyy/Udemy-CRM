import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {id} = useParams()
  const singleStaff = teachersList.find(item => item.id === id)
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
