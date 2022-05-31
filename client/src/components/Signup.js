const Signup = ({ username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation }) => {

    const handleSignUp = async () => {
        let req = await fetch('/signup', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({username, password, password_confirmation: passwordConfirmation})
        })
    }
    
    return (
        <form className="signup" action="/signup" method="POST" onSubmit={(e) => {
            e.preventDefault();
            handleSignUp()
            }}>
            {/* <input type="text" name="user[username]"></input>
            <input type="password" name="user[password]"></input>
            <input type="password" name="user[password_confirmation]"></input>
            <input type="submit"></input> */}
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
            <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} placeholder="Confirm Password"></input>
            <input type="submit"></input>
          </form>
    )
}

export default Signup