import { RiPlayMiniFill } from 'react-icons/ri'

const Numeration = ({index}) => {
  return (
    <div className="playlist__track-numeration">
      <RiPlayMiniFill className="play-icon" />
      <span>{index + 1}</span>
    </div>
  );
} 

export default Numeration