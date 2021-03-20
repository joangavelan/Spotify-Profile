import React from 'react'
import Main from '../main/Main'
import Sidebar from '../sidebar/Sidebar'
import './SpotifyProfile.scss'

const SpotifyProfile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <Main />
    </div>
  )
}

export default SpotifyProfile