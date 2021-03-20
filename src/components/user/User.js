import React from 'react'
import './User.scss'

const User = ({user}) => {
  return (
    <div className="user">
        <div className="img-wrapper">
          <img src={user?.images?.[0]?.url} alt={user.display_name}/>
        </div>
        <div className="user-content">
          <h3>Profile</h3>
          <h2>{user.display_name}</h2>
          <p>8 playlist públicas</p>
        </div>
    </div>
  )
}

export default User