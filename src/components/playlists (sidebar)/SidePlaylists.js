import React from 'react'
import './SidePlaylists.scss'
import { useGlobalState } from '../Provider'
import { Link } from 'react-router-dom'

const SidePlaylists = () => {

  const [{playlists}] = useGlobalState();

  return (
    <div className="sidePlaylists">
      <h2>PLAYLISTS</h2>
      <ul>
        {playlists?.items?.map(playlist => (
          <li key={playlist.id}>
            <Link to={{pathname: `/${playlist.name}`, playlist_id: playlist.id}}>
              {playlist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidePlaylists