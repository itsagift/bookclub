import { useState } from 'react';

function CreateClubForm({ formVisible, setFormVisible, setNewClub }){

    const [clubName, setClubName] = useState('')
    const [clubDesc, setClubDesc] = useState('')

    const handleSubmit = async () => {
        let req = await fetch('/newclub', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name: clubName, description: clubDesc })
        })
        if (req.ok){
            let res = await req.json()
            setFormVisible(false);
            setNewClub(res)
        }
        
        
    }

    return (
        <div className="club-form-modal" style={{display: formVisible ? "block" : "none"}}>
            <div className="form-container">
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
            <h1 className='club-form-title'>Start a Bookclub</h1>
            <form className="create-club-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                <input type="text" className="create-club-input-text" placeholder="Name your club..." onChange={(e) => {setClubName(e.target.value)}} value={clubName}></input>
                <textarea type="text" rows="8" className="create-club-input-text" placeholder="Describe your club..." onChange={(e) => {setClubDesc(e.target.value)}} value={clubDesc}></textarea>
                <input type="submit" className="form-button"></input>
            </form>
            </div>
        </div>
    )
}

export default CreateClubForm;