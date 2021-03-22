import { useCallback } from 'react'
import { getTimeDifference } from '../../utilities'

const Added = ({addedAt}) => {

  const added = useCallback(getTimeDifference(addedAt), []);

  return (
    <div>
      <span>{added}</span>
    </div>
  );
}

export default Added