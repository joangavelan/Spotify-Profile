import React from 'react'
import './Login.scss'
import { loginUrl } from '../spotify'

const Login = () => {
  return (
    <div className="login">
      <div>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"/>
        <a href={loginUrl}>LOG IN TO SPOTIFY</a>
      </div>
    </div>
  )
}

export default Login