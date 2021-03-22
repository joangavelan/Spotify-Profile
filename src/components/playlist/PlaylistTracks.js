import React from 'react'
import Track from './PlaylistTrack';

const PlaylistTracks = ({playlist, playlistTracksRef}) => {

  return (
    <div className="playlist__tracks-body" ref={playlistTracksRef}>
      {playlist.tracks.items.map((item, index) => ( 
        <Track 
          key={item.track.id}
          item={item}
          index={index}
          playlistId={playlist.id}/>
      ))}
    </div>
  )
};

export default PlaylistTracks