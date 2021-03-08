import React from 'react'
import NavItem from './NavItem'
import { FaUser } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { HiMusicNote } from 'react-icons/hi'
import { BiHistory } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className="nav">
      <NavItem Icon={FaUser} name='Profile' active="yes"/>
      <NavItem Icon={HiMusicNote} name='Top tracks'/>
      <NavItem Icon={GiMicrophone} name='Top artists'/>
      <NavItem Icon={BiHistory} name='Recent'/>
    </nav>
  )
}

export default Nav
