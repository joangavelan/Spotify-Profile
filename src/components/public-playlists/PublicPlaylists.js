import React from 'react'
import Card from '../card/Card'

const PublicPlaylists = ({playlists}) => {
  
  return (
    <div className="publicPlaylists re-grid-row">
      {playlists.map(playlist => (
        <Card
          key={playlist.id} 
          to={{pathname: (`/${playlist.name}`), playlist_id: playlist.id}}
          imgUrl={playlist?.images?.[0]?.url}
          name={playlist.name}/>
      ))}
    </div>
  )
}

export default PublicPlaylists