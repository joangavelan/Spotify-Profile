import React from 'react'
import './Card.scss'

const Card = ({img, name, description}) => {
  return (
    <div className="card">
      <img src={img.url} alt={name} className="card-img"/>
      <div className="card-content">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default Card