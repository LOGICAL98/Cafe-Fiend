import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login.js';
import './App.css';
import Navbar from './components/navbar.js';

function App() {
  const [token, setToken] = useState();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <h1>Welcome To Cafe-Fiend</h1>
      </header>
    </div>
  );
}

export default App;
