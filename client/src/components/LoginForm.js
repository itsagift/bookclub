function LoginForm({setUser}){

    const handleLogin = async () => {
      let form = new FormData(document.querySelector('#login-form'))
        let req = await fetch('/login', {
          method: "POST",
          body: form
        })
        let res = await req.json()
        if (req.status === 201) {
          setUser(res.username)
        }
        else {
          alert(res.error)
        }
    }
    
    return (
        <form id="login-form" className="account-form" action="/login" method="POST" onSubmit={(e) => {
            e.preventDefault();
            handleLogin()
            }}>
            <input type="text" className="input-text" name="username" placeholder="Username"></input>
            <input type="password" className="input-text" name="password" placeholder="Password"></input>
            <input type="submit" className='form-button' value="Login"></input>
          </form>
    )
}

export default LoginForm;