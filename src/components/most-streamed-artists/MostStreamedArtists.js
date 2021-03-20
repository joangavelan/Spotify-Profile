import React from 'react'
import Card from '../card/Card'

const MostStreamedArtists = ({artists}) => {
  
  return (
    <div>
      {artists && artists.map(artist => (
        <Card
          key={artist.id}  
          img={artist?.images?.[2]}
          name={artist.name} 
          description={artist.type}/>
      ))}
    </div>
  )
}

export default MostStreamedArtists