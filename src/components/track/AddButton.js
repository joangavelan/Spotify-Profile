const AddButton = ({track, handleTrackAdittion}) => {
  return (
    <div>
      <button 
        className="track-add"
        onClick={() => handleTrackAdittion(track.uri, track.id)}>
          Add
      </button>
    </div>
  );
}

export default AddButton