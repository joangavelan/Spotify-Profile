import React from 'react'
import './Utilities.scss'

const Heading = ({playlistName}) => {
  return (
    <div className="heading">
      <h2>Recommendations</h2>  
      <p>Recommended tracks based on {playlistName}</p>
    </div>
  )
}

export default Heading
