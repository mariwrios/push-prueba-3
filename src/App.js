import logo from './logo.svg';
import firebase from './firebase'
import './App.css';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const msg = firebase.messaging();
    msg.getToken().then((currentToken) => {
      if (currentToken) {
        console.warn('token', currentToken)
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });

   }, [])
 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>
        Click me!
      </button>
      </header>
    </div>
  );
}

export default App;
