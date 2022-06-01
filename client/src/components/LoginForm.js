
import {useState} from 'react';

const LoginForm = ({setUser}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [passwordConfirmation, setPasswordConfirmation] = useState('')
  // const [email, setEmail] = useState('')

    const handleLogin = async () => {
        let req = await fetch('/login', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ username, password })
        })
        let res = await req.json()
        if (req.status === 201) {
          setUser(res.username)
        }
        else {
          alert(res.error)
          // console.log(res.error)
        }
    }
    

    return (
        <form className="account-form" action="/login" method="POST" onSubmit={(e) => {
            e.preventDefault();
            handleLogin()
            }}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
            <input type="submit" value="Login"></input>
          </form>
    )
}

export default LoginForm;