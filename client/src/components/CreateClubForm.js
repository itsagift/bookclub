function CreateClubForm({ formVisible, setFormVisible }){
    return (
        <div className="club-form-container" style={{display: formVisible ? "block" : "none"}}>
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
            <h1 style={{fontFamily: "Patrick Hand", fontSize: "40px", textAlign: "center", marginTop: "6%"}}>Start a Bookclub</h1>
            <form className="create-club-form">
                <input type="text" className="create-club-input-text" placeholder="Name your club..."></input>
                <textarea type="text" rows="8" className="create-club-input-text" placeholder="Describe your club..."></textarea>
                <input type="submit" className="form-button"></input>
            </form>
        </div>
    )
}

export default CreateClubForm;