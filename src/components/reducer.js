export const ACTIONS = {
  SET_TOKEN: 'set-token',
  SET_USER: 'set-user',
  SET_PLAYLISTS: 'set-playlists',
  SET_UPDATE: 'set-update',
  SET_SELECTED_TRACK: 'set-selected-track',
  SET_SELECTED_TRACK_URL: 'set-selected-track-url',
  SET_SELECTED_TRACK_FIELD: 'set-selected-track-field',
  SET_SELECTED_TRACK_INDEX: 'set-selected-track-index',
  SET_UNSELECT_TRACK: 'set-unselect-track'
}

export const initialState = {
  token: '',
  user: '',
  playlists: [],
  update: 0,
  selected_track: {
    url: '',
    field: '',
    index: null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TOKEN:
      return {
        ...state, 
        token: action.token
      }
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.user
      }
    case ACTIONS.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      }
    case ACTIONS.SET_UPDATE:
      return {
        ...state,
        update: state.update + 1
      }
    case ACTIONS.SET_SELECTED_TRACK: 
      return {
        ...state,
        selected_track: action.selected_track
      }
    case ACTIONS.SET_SELECTED_TRACK_URL:
      return {
        ...state,
        selected_track: {...state.selected_track, url: action.url}
      }
    case ACTIONS.SET_SELECTED_TRACK_FIELD: 
      return {
        ...state,
        selected_track: {...state.selected_track, field: action.field}
      }
    case ACTIONS.SET_SELECTED_TRACK_INDEX: 
      return {
        ...state,
        selected_track: {...state.selected_track, index: action.index}
      }
    case ACTIONS.SET_UNSELECT_TRACK: 
      return {
        ...state,
        selected_track: {url: '', field: '', index: null}
      }
    default: 
      return state;
  }
}

export default reducer