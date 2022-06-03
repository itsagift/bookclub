function BookList ({books, setBooks, handleBookClick}){

  async function handleDeleteBook(id){
    let req = await fetch(`/books/${id}`, {
      method: "DELETE"
    })
    setBooks(prevState => prevState.filter((newBook) => {
      return newBook.id != id
    }))
  }

return(
  <div className='book-list-container'>
    <h3>Currently reading:</h3>
      <ul className='book-list'>
      {
        books.map((book) => {
          return(
        <li className='book-list-item'>
          <div className="list-item-text">
            <div>{book.title}</div>
            <div>{book.author}</div>
          </div>
          <div className="list-item-delete" onClick={()=> {handleDeleteBook(book.id)}}>Delete</div>
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