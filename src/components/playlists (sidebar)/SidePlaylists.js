import React from 'react'
import './SidePlaylists.scss'
import { useGlobalState } from '../Provider'
import { NavLink } from 'react-router-dom'

const SidePlaylists = () => {

  const [{playlists}] = useGlobalState();

  return (
    <>
      {playlists?.items?.length > 0 && 
      <div className="sidePlaylists">
        <h2>PLAYLISTS</h2>
        <ul>
          {playlists.items.map(playlist => (
            <li key={playlist.id}>
              <NavLink 
                to={{pathname: (`/${playlist.name}`), playlist_id: playlist.id}}
                activeStyle={{ color: 'white' }}>
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>}
    </>
  )
}

export default SidePlaylists