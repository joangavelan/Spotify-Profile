export const ACTIONS = {
  SET_TOKEN: 'set-token',
  SET_USER: 'set-user',
  SET_PLAYLISTS: 'set-playlists'
}

export const initialState = {
  token: '',
  user: '',
  playlists: []
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
  }
}

export default reducer