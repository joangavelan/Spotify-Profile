import { useEffect } from 'react';
import Login from "./components/login/Login";
import { getTokenFromUrl } from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useGlobalState } from './components/Provider'
import { ACTIONS } from './components/reducer'

const spotifyApi = new SpotifyWebApi();

function App() {

  const [{token, user}, dispatch] = useGlobalState();

  useEffect(() => {
    const fullToken = getTokenFromUrl();
    const _token = fullToken.access_token;
    //clean url
    // window.location.hash = "";

    if(_token) {
      //set token
      dispatch({type: ACTIONS.SET_TOKEN, token: _token})

      spotifyApi.setAccessToken(_token);
      
      //set user
      spotifyApi.getMe().then(user => {
        dispatch({type: ACTIONS.SET_USER, user})
      })
    }


    console.log(token, user)

  }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;