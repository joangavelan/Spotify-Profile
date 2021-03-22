import { useCallback } from 'react'
import { getArtists } from '../helpers'
import { RiPlayMiniFill } from 'react-icons/ri'

const Title = ({albumImageUrl, trackName, trackArtists, icon, filter}) => {

  const artists = useCallback(getArtists(trackArtists), []);

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


// const Title = ({track, artists}) => {
//   return (
//     <div className="track-title">
//       <div className="track-thumbnail">
//         <img 
//           className="r-thumbnail" 
//           src={track.album?.images[2]?.url}
//           alt={track.name}/>
//         <RiPlayMiniFill className="play-icon"/>
//       </div>
//       <div className="track-brand">
//         <p className="track-name">{track.name}</p>
//         <p className="track-artist">{artists}</p>
//       </div>
//     </div>
//   );
// }