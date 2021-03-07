import React from 'react';
import ReactDOM from 'react-dom';
import './sass/_global.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './components/Provider';
import reducer, { initialState } from './components/reducer'

ReactDOM.render(
  <Provider reducer={reducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();