import { AiOutlineClockCircle } from 'react-icons/ai'

export function Head() {
  return (
    <div className="playlist__songs-head grid-row">
      <div>&#x23;</div>
      <span>Title</span>
      <span>Album</span>
      <span>Added</span>
      <div><AiOutlineClockCircle className="clockIcon"/></div>
    </div>
        
  );
}