export const ACTIONS = {
  SET_TOKEN: 'set-token',
  SET_USER: 'set-user'
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
  }
}

export default reducer