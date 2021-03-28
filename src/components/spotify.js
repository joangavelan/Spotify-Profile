import SpotifyWebApi from 'spotify-web-api-js'

export const spotifyApi = new SpotifyWebApi();

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'b6b78b630f544b5d836af9fc72d81c88';
const redirectUri = 'https://spotify-profile-jg.netlify.app/';
// const redirectUri = 'http://localhost:3000/';
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-modify-public',
  'playlist-modify-private'
];

export const getTokenFromUrl = () => {
  return window.location.hash
          .substring(1)
          .split('&')
          .reduce((obj, item) => {
            const dataRow = item.split('=');
            const property = dataRow[0];
            const value = dataRow[1];
            obj[property] = decodeURIComponent(value);
            return obj;
          }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;