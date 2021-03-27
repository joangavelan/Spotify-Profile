import { useMemo } from 'react'
import { getTimeDifference } from '../../utilities'

const Added = ({addedAt}) => {

  const added = useMemo(() => getTimeDifference(addedAt), [addedAt]);

  return (
    <div>
      <span>{added}</span>
    </div>
  );
}

export default Added