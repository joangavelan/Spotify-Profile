import { useEffect } from 'react';
import Login from "./components/login/Login";
import { getTokenFromUrl } from './components/spotify'
import { useGlobalState } from './components/Provider'
import { ACTIONS } from './components/reducer'

function App() {

  const [{token}, dispatch] = useGlobalState();

  useEffect(() => {
    const fullToken = getTokenFromUrl();
    const _token = fullToken.access_token;

    dispatch({type: ACTIONS.SET_TOKEN, token: _token})

  }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;