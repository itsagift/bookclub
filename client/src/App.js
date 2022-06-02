import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import ClubList from './components/ClubList';
import CreateClubForm from './components/CreateClubForm';

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

  async function handleLogout(){
    let req = await fetch('/logout', {
      method: "DELETE"
    })
    setUser(null)
  }

  function handleCreateClub(){
    alert('Clicked')
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <div>Username is {user}</div>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
      <div className='dashboard'>
        <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub} handleCreateClub={handleCreateClub}/>
        Selected Club: {selectedClub}
        <CreateClubForm />
      </div>
    </div>
  );
}

export default App;
