import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main.js';

fetch("https://rickandmortyapi.com/api")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
