import React from 'react'
import './Nav.item.scss'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, Icon, children}) => {

  return (
    <NavLink to={to} className="nav__item" exact>
      <Icon className="nav__item-icon"/>
      <h3>{children}</h3>
    </NavLink>
  )
}

export default NavItem