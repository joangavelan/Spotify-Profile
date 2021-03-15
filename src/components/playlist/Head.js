import { AiOutlineClockCircle } from 'react-icons/ai'

const Head = () => {
  return (
    <div className="playlist__tracks-head grid-row">
      <div>&#x23;</div>
      <span>Title</span>
      <span>Album</span>
      <span>Added</span>
      <div><AiOutlineClockCircle className="clockIcon"/></div>
    </div>
        
  );
}

export default Head