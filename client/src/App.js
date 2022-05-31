import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser(){
      let req = await fetch('/me')
      if (req.ok){
        let res = await req.json();
        setUser(res.username)
      }
    }
    fetchUser();
  }, []);

  function onLogin(username){
    setUser(username)
  }

  async function handleLogout(){
    let req = await fetch('/logout', {
      method: "DELETE"
    })
    setUser(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Username is {user}</div>
        <img src="/GooseLogo.png" className="App-logo" alt="logo" />
        <Link to="/new-user">
          Sign Up
        </Link>
        <Link to="/existing-user">
          Login
        </Link>
        <button onClick={()=> {handleLogout()}}>Logout</button>
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
            onLogin={onLogin}
          />}>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
