import React from 'react'
import Card from '../card/Card'

const MostStreamedArtists = ({artists}) => {

  return (
    <div className="re-grid-row">
      {artists && artists.map(artist => (
        <Card
          key={artist.id}  
          imgUrl={artist?.images?.[0]?.url}
          name={artist.name} 
          description={artist.type}
          radius={true}/>
      ))}
    </div>
  )
}

export default MostStreamedArtists