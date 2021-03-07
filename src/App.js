import { useEffect } from 'react';
import Login from "./components/login/Login";
import { getTokenFromUrl } from './components/spotify'

function App() {

  useEffect(() => {
    const fullToken = getTokenFromUrl();
    
    console.log(fullToken.access_token)
  })

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;