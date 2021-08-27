import logo from './logo.png';

import './App.css';
import { useForm } from './hooks/useForm';
import { useEffect, useState } from 'react';
import { sendNotification } from './helper/sendNorification';


function App() {
 const [message, setMessage] = useState('')
  const [formValues, handleInputChange, reset] = useForm({
    msg:''
  })
  const { msg } = formValues;

  useEffect(() => {
  setMessage(msg) 
   sendNotification(message)
  }, [message, msg])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Send a message! 💅</h1>
        <input type='text' onChange={handleInputChange} name='msg' value={msg}/>
        <button onClick={reset}>
        Click me!
      </button>
      </header>
    </div>
  );
}

export default App;
