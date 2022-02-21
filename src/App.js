import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'; 
import config from './aws-exports';
import React, { useState, useEffect } from "react"; 
import { withAuthenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 

Amplify.configure(config) 

function App({signOut}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Trabalho final de Cloud Architecture e DevOps MBA.
        </p>
        <p>
        <p>  
          Integrantes:
        </p>
        <p>
          Raul M Ferreira - RM 341282 / 
          Julio Henrique Bitencourt  - RM 340931 / 
          Marcos Vinicius Amaral Apóstolo - RM 341155 
        </p>
        </p>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
