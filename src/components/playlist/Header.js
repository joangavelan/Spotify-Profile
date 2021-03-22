import { getPlaylistDuration, millsToMinAndSec, minSecFormat } from '../../utilities'
import { RiMusicLine } from 'react-icons/ri'

const Header = ({playlist}) => {

  const playlistDurationInMills = getPlaylistDuration(playlist.tracks.items);
  const playlistDuration = millsToMinAndSec(playlistDurationInMills, minSecFormat);

  return (
    <header className="playlist__header">
      <div className="playlist__header-cover"/>
      <div className="playlist__header-content">
        <div className="playlist__thumbnail">
          {playlist.images.length > 0 
          ? <img src={playlist?.images[0]?.url} alt={playlist.name}/>
          : <RiMusicLine className="music-icon"/>}
        </div>
        <div className="playlist__details">
          <h3>Playlist</h3>
          <h2>{playlist.name}</h2>
          <p>
            {playlist.owner.display_name}
            {playlist.tracks.total > 0 &&
            <>
              <span>  &#8226; {playlist.tracks.total} songs, </span>
              <span>{playlistDuration}</span>
            </>
            } 
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header