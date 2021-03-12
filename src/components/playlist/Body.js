export function Body({playlist, selectedSong, setSelectedSong}) {
  return (
    <div className="playlist__songs-body">
      {playlist.tracks.items.map((item, index) => ( 
        <div 
          key={item.track.id}
          className={`playlist__song ${selectedSong === index ? 'selected' : ''} grid-row`} 
          onClick={() => setSelectedSong(index)}>
          <div>{index+1}</div>
          <div className="playlist__song-title">
            <img 
              className="playlist__song-thumbnail"
              src={item.track.album.images[2].url} 
              alt={item.track.name}/>
            <div>
              <p className="playlist__song-name">
              {item.track.name}
              </p>
              <span className="playlist__song-artists">
              {item.track.artists[0].name}
            </span>
            </div>
          </div>
          <div><span className="playlist__song-album">{item.track.album.name}</span></div>
          <div><span>{item.added_at}</span></div>
          <div><span>{item.track.duration_ms}</span></div>
        </div>
      ))}
    </div>
  )
}