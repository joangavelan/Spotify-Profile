import { useMemo } from 'react'
import { getArtists } from '../../utilities'
import { RiPlayMiniFill } from 'react-icons/ri'

const Title = ({albumImageUrl, trackName, trackArtists, icon, filter}) => {

  const artists = useMemo(() => getArtists(trackArtists), [trackArtists]);

  return (
    <div className="track-title-wrapper">
      <div className="track-title">
        <div className="track-thumbnail">
          <img 
            className={filter ? 'filtered' : null}
            src={albumImageUrl} 
            alt={trackName}/>
          {icon && <RiPlayMiniFill className="play-icon"/>}
        </div>
        <div className="track-brand">
          <p className="track-name">{trackName}</p>
          <p className="track-artist">{artists}</p>
        </div>
      </div>
    </div>
  );
}

export default Title