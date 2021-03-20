import React from 'react'
import './Main.scss'
import { Route, Switch } from 'react-router-dom'
import Playlist from '../playlist/Playlist'
import Profile from '../profile/Profile'

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Profile} exact/>
        <Route path="/:playlist" component={Playlist}/>
      </Switch>
    </main>
  )
}

export default Main