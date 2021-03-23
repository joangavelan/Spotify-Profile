import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Body from '../body/Body'
import { useGlobalState } from '../Provider'
import User from '../user/User'
import SubHeading from '../sub-heading/SubHeading'
import { spotifyApi } from '../spotify'
import MostStreamedArtists from '../most-streamed-artists/MostStreamedArtists'
import TopTracks from '../top-tracks/TopTracks'
import PublicPlaylists from '../public-playlists/PublicPlaylists'

const Profile = () => {

  const [{user}] = useGlobalState();
  const [topArtists, setTopArtists] = useState([]);
  const [publicPlaylists, setPublicPlaylists] = useState([]);

  useEffect(() => {
    async function fetchMostStreamedArtists() {
      const artists = await spotifyApi.getMyTopArtists({limit: 8});
      setTopArtists(artists.items);
    }
    fetchMostStreamedArtists();
  }, [])

  useEffect(() => {
    async function fetchPublicPlaylists() {
      const playlists = await spotifyApi.getUserPlaylists({limit: 8});
      setPublicPlaylists(playlists.items);
    }
    fetchPublicPlaylists();
  }, [])

  return (
    <div className="Profile">
      <Header>
        <User user={user}/>
      </Header>
      <Body>
        <div className="spacer-2"></div>
        <div className="row">
          <SubHeading
            title="Most streamed artists this month"
            description="Only visible to you"/>
          <MostStreamedArtists artists={topArtists}/>
        </div>
        <div className="row">
          <SubHeading 
            title="Most streamed tracks this month"
            description="Only visible to you"/>
          <TopTracks limit={4}/>
        </div>
        <div className="row">
          <SubHeading title="Public Playlists"/>
          <PublicPlaylists playlists={publicPlaylists}/>
        </div>
      </Body>
    </div>
  )
}

export default Profile