import React from 'react'
import './Header.scss'

const Header = ({children}) => {
  return (
    <div className="header">
      <div className="header-cover"></div>
      <div className="header-content">
        {children}
      </div>
    </div>
  )
}

export default Header