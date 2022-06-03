import { useState } from 'react';

function CreateClubForm({ formVisible, setFormVisible }){

    const [clubName, setClubName] = useState('')
    const [clubDesc, setClubDesc] = useState('')

    const handleSubmit = async () => {
        let req = await fetch('/newclub', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ clubName, clubDesc })
        })
        let res = await req.json()
        console.log(res)
    }

    return (
        <div className="club-form-container" style={{display: formVisible ? "block" : "none"}}>
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
            <h1 style={{fontFamily: "Patrick Hand", fontSize: "40px", textAlign: "center", marginTop: "6%"}}>Start a Bookclub</h1>
            <form className="create-club-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
                }}>
                <input type="text" className="create-club-input-text" placeholder="Name your club..." onChange={(e) => {setClubName(e.target.value)}} value={clubName}></input>
                <textarea type="text" rows="8" className="create-club-input-text" placeholder="Describe your club..." onChange={(e) => {setClubDesc(e.target.value)}} value={clubDesc}></textarea>
                <input type="submit" className="form-button"></input>
            </form>
        </div>
    )
}

export default CreateClubForm;