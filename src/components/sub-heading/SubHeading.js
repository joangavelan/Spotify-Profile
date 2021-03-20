import React from 'react'
import './SubHeading.scss'

const SubHeading = ({title, description}) => {
  return (
    <div className="sub-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SubHeading