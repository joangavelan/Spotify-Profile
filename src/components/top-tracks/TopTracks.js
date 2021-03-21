import React, { useEffect, useState} from 'react'
import Track from './TopTrack'
import { spotifyApi } from '../spotify'

const TopTracks = ({limit}) => {

  const [topTracks, setTopTracks] = useState([]);
  
  useEffect(() => {
    async function fetchTopTracks() {
      const tracks = await spotifyApi.getMyTopTracks({limit});
      setTopTracks(tracks.items);
    }

    fetchTopTracks();
  }, [limit])

  console.log(topTracks)

  return (
    <div className="tracks">
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