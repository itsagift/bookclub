function CreateClubForm({ formVisible, setFormVisible }){
    return (
        <div className="club-form-container" style={{display: formVisible ? "block" : "none"}}>
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
            <form className="create-club-form">
                <input type="text" className="create-club-input-text" placeholder="Name your club..."></input>
                <textarea type="text" className="create-club-input-text" placeholder="Describe your club..."></textarea>
                <input type="submit" className="form-button"></input>
            </form>
        </div>
    )
}

export default CreateClubForm;