import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import ClubList from './components/ClubList';
import AddBook from './components/AddBook';

function App() {
  const [user, setUser] = useState(null);
  const [selectedClub, setSelectedClub] = useState({"name": "", "id": ""});
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

  async function handleLogout(){
    let req = await fetch('/logout', {
      method: "DELETE"
    })
    setUser(null)
  }
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

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <div>Username is {user}</div>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub}/>
          
          <div className='book-club'>
          Selected Club: {selectedClub.name}
          {isAdmin ? "you are admin" : "you are not admin"}
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
  );
}

export default App;
