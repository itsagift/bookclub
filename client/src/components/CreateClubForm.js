function CreateClubForm({ formVisible, setFormVisible }){
    return (
        <div className="club-form-container" style={{display: formVisible ? "block" : "none"}}>
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
            <form className="create-club-form">
                <input type="text" placeholder="Club Name"></input>
                <input type="text" placeholder="Describe your club"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default CreateClubForm;