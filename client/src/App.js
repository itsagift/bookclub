import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import ClubList from './components/ClubList';

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
        <div className='dashboard'>

        </div>
        <div>Username is {user}</div>
        <button className="login-button" onClick={()=> handleLogout()}>Logout</button>

        <ClubList/>
        
    </div>
  );
}

export default App;
