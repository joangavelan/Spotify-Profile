import { useCallback } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { getTrackDuration } from '../helpers'

const Duration = ({uri, durationMs, removeTrack, deleteIcon}) => {

  const duration = useCallback(getTrackDuration(durationMs));

  return (
    <div>
      {deleteIcon && 
        <AiOutlineDelete 
          className="delete-icon" 
          onClick={() => removeTrack(uri)}/>}
      <span>{duration}</span>
    </div>
  );
}

export default Duration