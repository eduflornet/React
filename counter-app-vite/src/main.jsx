import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from './FirstApp';
import './styles.css';
//import {HelloWorldApp} from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="Soy Edu" subtitle= '123' />
  </React.StrictMode>
)

/*
function App() {
  // es lo mismo que escribir: 
  // document.createElement
  return (<h1>Hola Mundo</h1>);
}

import App from './App'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

*/
