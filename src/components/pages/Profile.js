import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Body from '../body/Body'
import { useGlobalState } from '../Provider'
import User from '../user/User'
import SubHeading from '../sub-heading/SubHeading'
import { spotifyApi } from '../spotify'
import MostStreamedArtists from '../most-streamed-artists/MostStreamedArtists'
import Tracks from '../track/four-col/Tracks'
import PublicPlaylists from '../public-playlists/PublicPlaylists'
import Loader from '../loader/Loader'
import Warning from '../warning/Warning'

const Profile = () => {

  const [{user}] = useGlobalState();
  const [topArtists, setTopArtists] = useState('');
  const [publicPlaylists, setPublicPlaylists] = useState('');
  const [topTracks, setTopTracks] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopArtists({limit: 8})
      .then(artists => setTopArtists(artists.items));
  }, [])

  useEffect(() => {
    spotifyApi.getUserPlaylists({limit: 8})
      .then(playlists => setPublicPlaylists(playlists.items));
  }, [])

  useEffect(() => {
    spotifyApi.getMyTopTracks({limit: 4})
     .then(topTracks => setTopTracks(topTracks.items));
  }, [])
  
  return (
    <>
      {user && topArtists && publicPlaylists && topTracks ?
        <div className="Profile">
          <Header>
            <User user={user} playlistsLength={publicPlaylists.length}/>
          </Header>
          <Body>
          {
            topArtists.length > 0 &&
            publicPlaylists.length > 0 &&
            topTracks.length > 0 ?   
            <>
              <div className="row" style={{marginTop: '2rem'}}>
                <SubHeading
                  title="Most streamed artists this month"
                  description="Only visible to you"/>
                <MostStreamedArtists artists={topArtists}/>
              </div>
              <div className="row">
                <SubHeading 
                  title="Most streamed tracks this month"
                  description="Only visible to you"/>
                <Tracks tracks={topTracks}/>
              </div>
              <div className="row">
                <SubHeading title="Public Playlists"/>
                <PublicPlaylists playlists={publicPlaylists}/>
              </div>
            </>
            : <Warning message="No data available"/>
          }  
          </Body>
        </div>

      : <Loader />}
    </> 
  )
}

export default Profile