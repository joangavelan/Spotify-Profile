import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Utilities.scss'

const Warning = () => {
  return (
    <div className="warning">
      <p>You haven't added any songs yet</p>
      <AiOutlineCloseCircle />
    </div>
  )
}

export default Warning