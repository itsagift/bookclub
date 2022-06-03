import { useState } from 'react';

function AddBookForm({ bookFormVisible, setBookFormVisible, setBooks, selectedClub }){

    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');

    async function handleSubmit(){
      let req = await fetch(`/${selectedClub.id}/newbook`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"club_id":`${selectedClub.id}`, title:bookName, author:bookAuthor})
      })
      let res = await req.json()
        if (req.ok) {
          
          setBooks(prevState => [...prevState, res])
          setBookFormVisible(false);
      }
      else {
        alert(res.error)
      }
      
    }
  

    return (
        <div className="club-form-modal" style={{display: bookFormVisible ? "block" : "none"}}>
            <div className="form-container">
            <a className="close-button" href="#" onClick={() => setBookFormVisible(false)}>x</a>
            <h1 className='club-form-title'>Add a Book</h1>
            <form className="create-club-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                <input type="text" className="create-club-input-text" placeholder="Enter the book title." onChange={(e) => {setBookName(e.target.value)}} value={bookName}></input>
                <input type="text" className="create-club-input-text" placeholder="Enter the book author." onChange={(e) => {setBookAuthor(e.target.value)}} value={bookAuthor}></input>
                <input type="submit" className="form-button"></input>
            </form>
            </div>
        </div>
    )
}

export default AddBookForm;