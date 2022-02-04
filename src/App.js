import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'; 
import config from './aws-exports';
import React, { useState, useEffect } from "react"; 
import { withAuthenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 

Amplify.configure(config) 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
