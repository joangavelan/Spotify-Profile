import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Warning.scss'

const Warning = ({message}) => {
  return (
    <div className="warning">
      <p>{message}</p>
      <AiOutlineCloseCircle />
    </div>
  )
}

export default Warning