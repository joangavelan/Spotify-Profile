import React, { useState } from 'react'
import { Head } from './Head'
import { Body } from './Body'
import '../../sass/_layout.scss'
import Recommendations from '../recommendations/Recommendations'
import Warning from '../utilities/Warning'

const Tracks = ({ playlist }) => {

  const [clickedTrackIndex, setClickedTrackIndex] = useState(false);
  const [clickedTrackUrl, setClickedTrackUrl] = useState('');

  const handleTrackClick = (trackIndex, trackUrl) => {
    setClickedTrackIndex(trackIndex);
    setClickedTrackUrl(trackUrl);
  }

  const handleAnchorTag = (e) => {
    if(!clickedTrackUrl) e.preventDefault();
  }

  return (
    <div className="playlist__tracksContainer">
      {playlist.tracks.items.length > 0 ?
      <>
        <a className="playlist__playerLink" 
            onClick={handleAnchorTag}
            style={{backgroundColor: clickedTrackUrl ? '#1DB954' : '#00a73b'}}
            href={clickedTrackUrl} 
            target="_blank">
              Play on spotify
        </a>
        <div className="playlist__tracks">
          <Head />
          <Body 
            playlist={playlist} 
            clickedTrackIndex={clickedTrackIndex}
            setClickedTrackIndex={setClickedTrackIndex}
            clickedTrackUrl={clickedTrackUrl}
            setClickedTrackUrl={setClickedTrackUrl}
            handleTrackClick={handleTrackClick}/>
        </div>
        <Recommendations playlist={playlist}/>
      </>
      : <Warning />}
    </div>
  )
}

export default Tracks