import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Body from '../body/Body'
import { useGlobalState } from '../Provider'
import User from '../user/User'
import SubHeading from '../sub-heading/SubHeading'
import { spotifyApi } from '../spotify'
import MostStreamedArtists from '../most-streamed-artists/MostStreamedArtists'

const Profile = () => {

  const [{user}] = useGlobalState();
  const [mostStreamedArtists, setMostStreamedArtists] = useState([]);

  useEffect(() => {
    async function fetchMostStreamedArtists() {
      const artists = await spotifyApi.getMyTopArtists({limit: 8});
      setMostStreamedArtists(artists.items)
    }

    fetchMostStreamedArtists();
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
          <MostStreamedArtists artists={mostStreamedArtists}/>
        </div>
      </Body>
    </div>
  )
}

export default Profile