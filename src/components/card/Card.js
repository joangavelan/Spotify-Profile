import React from 'react'
import './Card.scss'
import { RiPlayMiniFill } from 'react-icons/ri'
import { FiMusic } from 'react-icons/fi'

const Card = ({imgUrl, name, description, radius}) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        {imgUrl
         ? <img 
              style={radius ? {borderRadius: '50%'} : null}
              src={imgUrl} 
              alt={name} />
         : <FiMusic className="music-icon"/>}
        <RiPlayMiniFill className="play-icon"/>
      </div>
      <div className="card__content">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default Card