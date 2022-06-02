function CreateClubForm({ formVisible, setFormVisible }){
    return (
        <div className="club-form-container" style={{display: formVisible ? "block" : "none"}}>
            <a className="close-button" href="#" onClick={() => setFormVisible(false)}>x</a>
        </div>
    )
}

export default CreateClubForm;