import React from 'react'
import './Sidebar.scss'
import Nav from '../nav/Nav'
import SidePlaylists from '../playlists (sidebar)/SidePlaylists'

const Sidebar = ({ spotify }) => {
  return (
    <aside className="sidebar">
      <img 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo" 
        className="sidebar__logo"/>
      <Nav />
      <SidePlaylists spotify={spotify} />
    </aside>
  )
}

export default Sidebar