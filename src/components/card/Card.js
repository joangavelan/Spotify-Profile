import React from 'react'
import './Card.scss'
import { RiPlayMiniFill } from 'react-icons/ri'
import { FiMusic } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Card = ({to, imgUrl, name, description, radius}) => {
  return (
    <Link 
       className="card" 
       to={to}
       rel="noreferrer">
      <div 
        className="card__img-wrapper" 
        style={!imgUrl ? {backgroundColor: '#333'} : null}>
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
    </Link>
  )
}

export default Card