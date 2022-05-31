import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src="/GooseLogo.png" className="App-logo" alt="logo" />
        <Link to="/new-user">
          Sign Up
        </Link>
        <Link to="/existing-user">
          Login
        </Link>
        <Routes>
          <Route exact path="new-user" element={<Signup 
            username={username} 
            password={password} 
            passwordConfirmation={passwordConfirmation} 
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setPasswordConfirmation={setPasswordConfirmation}
            setEmail={setEmail}
          />}>
          </Route>
          <Route exact path="existing-user" element={<Login
            username={username} 
            password={password} 
            setUsername={setUsername}
            setPassword={setPassword}
          />}>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
