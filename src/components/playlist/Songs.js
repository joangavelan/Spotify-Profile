import React from 'react'

const Songs = ({ playlist }) => {
  return (
    <div className="playlist__itemsContainer">
      <a className="playlist__playerLink" href="a" target="_blank">Play on spotify</a>
        <ul className="playlist__songs">
          {playlist.tracks.items.map(item => ( 
            <li className="playlist__song" key={item.track.id}>
              <div>
                <p>{item.track.name}</p>
                <span>{item.track.artists[0].name}</span>
              </div>
              <p>{item.track.album.name}</p>
              <p>{item.added_at}</p>
              <p>{item.track.duration_ms}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Songs