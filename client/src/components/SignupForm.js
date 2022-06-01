import {useState} from 'react';

const SignupForm = ({setUser}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')

    const handleSignUp = async () => {
        let req = await fetch('/signup', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({username, email, password, password_confirmation: passwordConfirmation})
        })
        let res = await req.json();
        if (req.ok) {
          setUser(res.username)
        }
        else {
          alert(res.error)
          // console.log(res.error)
        }
    }
    
    return (
        <form className="account-form" onSubmit={(e) => {
            e.preventDefault();
            handleSignUp()
            }}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
            <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} placeholder="Confirm Password"></input>
            <input type="submit" value="Sign Up"></input>
          </form>
    )
}

export default SignupForm;