import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';

function App() {
  const [user, setUser] = useState(null);
  const [postTest, setPostTest] = useState([]);

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

  async function handleLogout(){
    let req = await fetch('/logout', {
      method: "DELETE"
    })
    setUser(null)
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <header className="App-header">
        <div>Username is {user}</div>
        <button onClick={()=> handleLogout()}>Logout</button>

        
        {/* <Link to="/new-user">
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
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
