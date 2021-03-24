import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Warning.scss'

const Warning = () => {
  return (
    <div className="warning">
      <p>You haven't added any tracks to this playlist yet</p>
      <AiOutlineCloseCircle />
    </div>
  )
}

export default Warning