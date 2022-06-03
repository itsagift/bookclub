import { useState } from 'react';

function AddMemberForm({ memberFormVisible, setMemberFormVisible, setMembers, selectedClub }){

    const [memberName, setMemberName] = useState('')

    const handleSubmit = async () => {
      console.log("membername", memberName)
        let req = await fetch(`/users/${memberName}`)
        if (req.ok){
            let res = await req.json()
            let postreq = await fetch(`/memberships`, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({user_id: res.id, club_id: selectedClub.id, admin: false})
            }
            )
            let postres = await postreq.json()
            console.log("postres", postres)
        }
    }
  

    return (
        <div className="club-form-modal" style={{display: memberFormVisible ? "block" : "none"}}>
            <div className="form-container">
            <a className="close-button" href="#" onClick={() => setMemberFormVisible(false)}>x</a>
            <h1 className='club-form-title'>Add a Member</h1>
            <form className="create-club-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                <input type="text" className="create-club-input-text" placeholder="Enter a member's username." onChange={(e) => {setMemberName(e.target.value)}} value={memberName}></input>
                <input type="submit" className="form-button"></input>
            </form>
            </div>
        </div>
    )
}

export default AddMemberForm;