import './App.css';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')

  const handleSignUp = async () => {
    let form = new FormData(document.querySelector('.login'))
    let req = await fetch('/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password, password_confirmation: passwordConfirmation})
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="/GooseLogo.png" className="App-logo" alt="logo" />
        <form className="login" action="/signup" method="POST" onSubmit={(e) => {
          e.preventDefault();
          handleSignUp()
        }}>
          {/* <input type="text" name="user[username]"></input>
          <input type="password" name="user[password]"></input>
          <input type="password" name="user[password_confirmation]"></input>
          <input type="submit"></input> */}
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
          <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} placeholder="Confirm Password"></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
