import React from 'react'
import Header from '../header/Header'
import { useGlobalState } from '../Provider'
import User from '../user/User'

const Profile = () => {

  const [{user}] = useGlobalState();

  if(user) {
    console.log(user.images[0].url)
  }

  return (
    <div>
      <Header>
        <User user={user}/>
      </Header>
    </div>
  )
}

export default Profile