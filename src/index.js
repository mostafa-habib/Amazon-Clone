import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './components/StateProvider';
import reducer,  { initialState }  from './components/reducer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
