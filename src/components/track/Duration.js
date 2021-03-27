import { useMemo } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { getTrackDuration } from '../../utilities'

const Duration = ({uri, durationMs, removeTrack, deleteIcon}) => {

  const duration = useMemo(() => getTrackDuration(durationMs), [durationMs]);

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