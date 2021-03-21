import { useCallback } from 'react'
import { getArtists } from '../helpers'

const Title = ({albumImageUrl, trackName, trackArtists}) => {

  const artists = useCallback(getArtists(trackArtists), []);

  return (
    <div className="playlist__track-title-wrapper">
      <div className="playlist__track-title">
        <div className="playlist__track-thumbnail">
          <img src={albumImageUrl} alt={trackName}/>
        </div>
        <div className="playlist__track-brand">
          <p className="playlist__track-name">{trackName}</p>
          <p className="playlist__track-artist">{artists}</p>
        </div>
      </div>
    </div>
  );
}

export default Title