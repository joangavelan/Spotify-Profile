import React from 'react'
import './Body.scss'
import { Route, Switch } from 'react-router-dom'
import Playlist from '../playlist/Playlist'

const Body = () => {
  return (
    <main className="body">
      <Switch>
        <Route path="/:playlist" component={Playlist}/>
      </Switch>
    </main>
  )
}

export default Body