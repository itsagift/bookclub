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
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");

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
      <div>Username is {user}</div>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub} setSelectedDesc={setSelectedDesc} selectedDesc={selectedDesc}/>
          <div className="selected-club"> Selected Club: {selectedClub}
          Description: {selectedDesc}
          </div> 
        </div>
    </div>
  );
}

export default App;
