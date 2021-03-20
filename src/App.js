import { useEffect } from 'react';
import Login from "./components/login/Login";
import { getTokenFromUrl } from './components/spotify'
import { useGlobalState } from './components/Provider'
import { ACTIONS } from './components/reducer'
import SpotifyProfile from './components/spotify-profile/SpotifyProfile'
import { BrowserRouter as Router } from "react-router-dom";
import { spotifyApi } from './components/spotify'


function App() {

  const [{token}, dispatch] = useGlobalState();

  useEffect(() => {
    const fullToken = getTokenFromUrl();
    const _token = fullToken.access_token;
    //clean url
    // window.location.hash = "";
    if(_token) {
      //set token
      dispatch({type: ACTIONS.SET_TOKEN, token: _token})
      //set access
      spotifyApi.setAccessToken(_token);
      // set user
      spotifyApi.getMe().then(user => {dispatch({type: ACTIONS.SET_USER, user})})
      // set playlists
      spotifyApi.getUserPlaylists().then(playlists => {dispatch({type: ACTIONS.SET_PLAYLISTS, playlists})})
    }

  }, [dispatch])

  return (
    <Router>
      <div className="App">
        {token ? <SpotifyProfile /> : <Login />}
      </div>
    </Router>
    
  );
}

export default App;