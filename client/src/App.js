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


  useEffect(() => {
    async function fetchBooks(){
      if (selectedClub.id){
        let req = await fetch(`/${selectedClub.id}/books`)
        if (req.ok){
          let res = await req.json();
          setBooks(res)
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

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <div>Username is {user}</div>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
        <div className='dashboard'>
          <ClubList setSelectedClub={setSelectedClub} selectedClub={selectedClub} setBooks={setBooks}/>
          
          <div className='book-club'>
          Selected Club: {selectedClub.name}
            
            {
            books.map((book) => {
              return(
            <div>{book.title}</div>
            )
            })
            }
            
          </div>
        </div>
    </div>
  );
}

export default App;
