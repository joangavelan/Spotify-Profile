import React from 'react'
import './Main.scss'
import { Route, Switch } from 'react-router-dom'
import Playlist from '../playlist/Playlist'
import Profile from '../pages/Profile'
import TopTracks from '../pages/TopTracks'
import TopArtists from '../pages/TopArtists'
import Recent from '../pages/Recent'
import Artist from '../pages/Artist'

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Profile} exact/>
        <Route path="/tracks" component={TopTracks}/>
        <Route path="/artists" component={TopArtists} exact/>
        <Route path="/artists/:name" component={Artist}/>
        <Route path="/recent" component={Recent}/>
        <Route path="/:playlist" component={Playlist}/>
      </Switch>
    </main>
  )
}

export default Main