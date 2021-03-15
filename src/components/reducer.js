export const ACTIONS = {
  SET_TOKEN: 'set-token',
  SET_USER: 'set-user',
  SET_PLAYLISTS: 'set-playlists',
  SET_UPDATE: 'set-update'
}

export const initialState = {
  token: '',
  user: '',
  playlists: [],
  update: 0
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
    default: 
      return state;
  }
}

export default reducer