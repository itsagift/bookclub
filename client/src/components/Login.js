const Login = ({ username, setUsername, password, setPassword }) => {

    const handleLogin = async () => {
        let req = await fetch('/login', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ username, password })
        })
        let res = await req.json()
        if (req.status === 201) {
          alert('Login successful! HONK')
        }
        else {
          alert(res.error)
          // console.log(res.error)
        }
    }
    

    return (
        <form className="login" action="/login" method="POST" onSubmit={(e) => {
            e.preventDefault();
            handleLogin()
            }}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
            <input type="submit"></input>
          </form>
    )
}

export default Login;