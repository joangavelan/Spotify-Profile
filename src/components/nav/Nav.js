import React from 'react'
import NavItem from './NavItem'
import { FaUser } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { HiMusicNote } from 'react-icons/hi'
import { BiHistory } from 'react-icons/bi'

const Nav = () => {

  return (
    <nav className="nav">
      <NavItem to={'/'} Icon={FaUser}>Profile</NavItem>
      <NavItem to={'/tracks'} Icon={HiMusicNote}>Top Tracks</NavItem>
      <NavItem to={'/artists'} Icon={GiMicrophone}>Top Artists</NavItem>
      <NavItem to={'/recent'} Icon={BiHistory}>Recent</NavItem>
    </nav>
  )
}

export default Nav