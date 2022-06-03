import {useState, useEffect} from 'react';
import AddBookForm from './AddBookForm';

function BookList ({selectedClub}){
  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState(0);
  const [bookFormVisible, setBookFormVisible] = useState(false);

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
  }, [selectedClub, likes]);

  

  async function handleDeleteBook(id){
    let req = await fetch(`/books/${id}`, {
      method: "DELETE"
    })
    setBooks(prevState => prevState.filter((newBook) => {
      return newBook.id != id
    }))
  }

  async function handleLikeBook(book){
    let req = await fetch(`/books/${book.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: book.likes + 1})
    })
    let res = await req.json();
    setLikes(res.likes)
  }

  function sortIds(a, b) {
    return a.id - b.id;
  };

  function handleBookModal(){
    setBookFormVisible(true);
  }

return(
  <div className='book-list-container'>
    <h3>Currently reading:</h3>
      <ul className='book-list'>
      {
        books.sort(sortIds).map((book) => {
          return(
        <li className='book-list-item'>
          <div className="list-left">
            <img className="list-item-image" src="/open-book.png"/>
            <div className="list-item-text">
              <div className="list-item-title">{book.title}</div>
              <div>{book.author}</div>
            </div>
          </div>
          <div className="list-right">
            <div class="book-likes">{book.likes}</div>
            <button className="heart-emoji" onClick={()=> {handleLikeBook(book)}}>❤️</button>
            <div className="list-item-delete" onClick={()=> {handleDeleteBook(book.id)}}>Delete</div>
          </div>
          
        </li>
        )
        })
      }
      </ul>
    <button onClick={handleBookModal}>Add Book</button>
    <AddBookForm bookFormVisible={bookFormVisible} setBookFormVisible={setBookFormVisible} setBooks={setBooks} selectedClub={selectedClub}/>
  </div> 
)
}

export default BookList