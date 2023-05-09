import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Body from './Body';

function App() {

  return (
    <Body/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
