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
  const [formVisible, setFormVisible] = useState(false)
  const [newClub, setNewClub] = useState({})

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

  function handleFormVisible(){
    setFormVisible(true)
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <div>Username is {user}</div>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
      <div className='dashboard'>
        <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub} handleFormVisible={handleFormVisible}/>
        Selected Club: {selectedClub}
      </div>
      <CreateClubForm formVisible={formVisible} setFormVisible={setFormVisible} setNewClub={setNewClub}/>
    </div>
  );
}

export default App;
