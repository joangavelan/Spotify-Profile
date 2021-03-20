import React from 'react'
import './Card.scss'
import { RiPlayMiniFill } from 'react-icons/ri'


const Card = ({img, name, description}) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={img.url} alt={name}/>
        <RiPlayMiniFill />
      </div>
      <div className="card__content">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default Card