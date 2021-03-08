import React from 'react'
import './Nav.item.scss'

const NavItem = ({Icon, name, active}) => {
  return (
    <div className={`nav__item ${active ? 'nav__item--active' : ''}`}>
      <Icon className="nav__item-icon"/>
      <h3>{name}</h3>
    </div>
  )
}

export default NavItem