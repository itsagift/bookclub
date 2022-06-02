import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import ClubList from './components/ClubList';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [postTest, setPostTest] = useState([]);
  const [selectedClub, setSelectedClub] = useState("");

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

  if (!user) return <div><NavBar /><Login setUser={setUser} /></div>;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <div>Username is {user}</div>
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub}/>
          Selected Club: {selectedClub}
        </div>
    </div>
  );
}

export default App;
