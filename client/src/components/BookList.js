import {useState, useEffect} from 'react';

function BookList ({handleBookClick, selectedClub}){
  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchBooks(){
      if (selectedClub.id){
        let req = await fetch(`/${selectedClub.id}/books`)
        if (req.ok){
          let res = await req.json();
          setBooks(res)
          console.log(res)
        }
      }
    }
    fetchBooks();
  }, [selectedClub, likes]);

  async function handleBookClick(){
    
    let req = await fetch(`/${selectedClub.id}/newbook`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"club_id": `${selectedClub.id}`, "title": "test", "author": "test author"})
    })
    let res = await req.json()
      if (req.ok) {
        setBooks(prevState => [...prevState, res])
    }
    else {
      alert(res.error)
          // console.log(res.error)
    }
  }

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
    console.log("response", res)
    setLikes(res.likes)
  }

  function sortIds(a, b) {
    return a.id - b.id;
  };

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
    <button onClick={handleBookClick}>Add Book</button>
  </div> 
)
}

export default BookList