import React from 'react'
import Body from '../body/Body'
import Sidebar from '../sidebar/Sidebar'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar/>
      <Body />
    </div>
  )
}

export default Profile