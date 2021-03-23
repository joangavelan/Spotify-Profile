import React, { useEffect, useState, useRef} from 'react'
import Track from './TopTrack'
import { spotifyApi } from '../spotify'
import { useOutsideHandler } from '../../utilities'
import { useGlobalState } from '../Provider'

const TopTracks = ({limit}) => {

  const [{}, dispatch] = useGlobalState();
  const [topTracks, setTopTracks] = useState([]);
  
  useEffect(() => {
    async function fetchTopTracks() {
      const tracks = await spotifyApi.getMyTopTracks({limit});
      setTopTracks(tracks.items);
    }

    fetchTopTracks();
  }, [limit])

  const topTracksRef = useRef(null);
  useOutsideHandler(topTracksRef, dispatch);

  return (
    <div 
      ref={topTracksRef}
      className="tracks"
      style={{marginTop: 0}}>
      {topTracks.map((track, index) => (
        <Track 
          key={track.id} 
          track={track}
          index={index}/>
      ))}
    </div>
  )
}

export default TopTracks