import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import ClubList from './components/ClubList';
import NavBar from './components/NavBar';
import CreateClubForm from './components/CreateClubForm';
import BookList from './components/BookList';
import AddMemberForm from './components/AddMemberForm';

function App() {
  const [user, setUser] = useState(null);
  const [selectedClub, setSelectedClub] = useState({"name": "", "id": "", "description": ""});
  const [members, setMembers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [memberFormVisible, setMemberFormVisible] = useState(false);
  const [member, setNewMember] = useState(false);
  
  useEffect(() => {
    if (selectedClub.id){
    async function fetchClubMembers(){
        let req = await fetch(`/${selectedClub.id}/memberships`)
        if (req.ok){
          let res = await req.json();
          setMembers(res)
        }
      }
      fetchClubMembers();
    }
  }, [selectedClub.id]);
  

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

  async function handleDelete(member){
    let req = await fetch(`/memberships/${member.id}`, {
      method: "DELETE"
    })
    setMembers(prevState => prevState.filter((newMember) => {
      return newMember.id != member.id
    }))
  }

  function handleAddMember(){
    setMemberFormVisible(true);
  }
  

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub} />

          <div className="selected-club">
            <h2 className='selected-club-title'>{selectedClub.name}</h2>
            <i>{selectedClub.description} </i>
            <div className='members-dropdown-container'>
              <details>
                <summary>Members</summary>
                <div className='members-list-container'>
                  <div className='members-list'>
                  {
                    members.map((member)=> {
                      return(
                      <div className={`member-item ${member.admin? "admin-item": "" }`}>
                        <div className={`member-name ${member.admin? "admin-name": "" }`}>{`${member.user.username}`} {member.admin ? "(Admin)" : ""}</div>
                        {!member.admin && <button className='member-delete' onClick={()=> {handleDelete(member)}}>Remove member</button>}
                      </div>
                      )
                      
                    })
                  }
                </div>
                <button onClick={()=> {handleAddMember()}}>Add new member</button>
                <AddMemberForm memberFormVisible={memberFormVisible} setMemberFormVisible={setMemberFormVisible} setMembers={setMembers} selectedClub={selectedClub}/>
                </div>
              </details>
            </div>
          
          <BookList selectedClub={selectedClub}/>
          </div>
          
        </div>
      
    </div>
  );
}

export default App;
