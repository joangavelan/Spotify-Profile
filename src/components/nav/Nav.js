import React from 'react'
import NavItem from './NavItem'
import { FaUser } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { HiMusicNote } from 'react-icons/hi'
import { BiHistory } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <NavItem 
          Icon={FaUser} 
          name='Profile' 
          active="yes"/>
      </Link>

      <Link to="/tracks">
        <NavItem 
          Icon={HiMusicNote} 
          name='Top tracks'/>
      </Link>

      <NavItem Icon={GiMicrophone} name='Top artists'/>
      <NavItem Icon={BiHistory} name='Recent'/>
    </nav>
  )
}

export default Nav