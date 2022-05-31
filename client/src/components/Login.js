const Login = ({ username, setUsername, password, setPassword }) => {

    const handleLogin = async () => {
        let req = await fetch('/login', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ username, password })
        })
    }
    
    return (
        <form className="login" action="/login" method="POST" onSubmit={(e) => {
            e.preventDefault();
            handleLogin()
            }}>
            {/* <input type="text" name="user[username]"></input>
            <input type="password" name="user[password]"></input>
            <input type="password" name="user[password_confirmation]"></input>
            <input type="submit"></input> */}
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
            <input type="submit"></input>
          </form>
    )
}

export default Login;