const AddButton = ({id, uri, handleTrackAdittion}) => {
  return (
    <div>
      <button 
        className="track-add"
        onClick={() => handleTrackAdittion(uri, id)}>
          Add
      </button>
    </div>
  );
}

export default AddButton