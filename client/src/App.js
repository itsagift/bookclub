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
  const [selectedClub, setSelectedClub] = useState({"name": "", "id": "", "description": ""});
  const [books, setBooks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    async function fetchBooks(){
      if (selectedClub.id){
        let req = await fetch(`/${selectedClub.id}/books`)
        if (req.ok){
          let res = await req.json();
          setBooks(res)
          console.log(selectedClub.id)
        }
      }
    }
    fetchBooks();
  }, [selectedClub]);

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

  async function handleBookClick(){
    
    let req = await fetch("/newbook", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"club_id": `${selectedClub.id}`, "title": "test", "author": "test author"})
    })
    let res = await req.json()
      if (req.ok) {
        setBooks(prevState => [...prevState, res])
    }
    else {
      alert(res.errors)
          // console.log(res.error)
    }
  }

  if (!user) return <div><NavBar /><Login setUser={setUser} /></div>;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <div>Username is {user}</div>
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub}/>

          <div className="selected-club">
            <h2>{selectedClub.name}</h2>
            <i>{selectedClub.description} </i>
            
          {/* {isAdmin ? "you are admin" : "you are not admin"} */}
          <div>
            {
            books.map((book) => {
              return(
            <div>{book.title}</div>
            )
            })
            }
            <button onClick={handleBookClick}>Add Book</button>
          </div> 
          </div>
        </div>
    </div>
  );
}

export default App;
