import React from 'react'
import './Body.scss'

const Body = ({children}) => {
  return (
    <div className="body">
      <div className="body-cover"></div>
      <div className="body-content">
        {children}
      </div>
    </div>
  )
}

export default Body