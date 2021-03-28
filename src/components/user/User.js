import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import './User.scss'

const User = ({user, playlistsLength}) => {

  const url = user?.images?.[0]?.url;
  const name = user.display_name;

  return (
    <div className="user">
        <div className="img-wrapper">
          {url 
            ? <img src={url} alt={name}/>
            : <AiOutlineUser />}
        </div>
        <div className="user-content">
          <h3>Profile</h3>
          <h2>{name}</h2>
          {playlistsLength > 0 && 
            <p>{playlistsLength} public playlists</p>
          }
        </div>
    </div>
  )
}

export default User