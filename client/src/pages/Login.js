import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import {useState} from 'react';

function Login ({setUser}) {
  const [loginVisible, setLoginVisible] = useState(true); 
return(
  <div className="login-form">
    <img src="/GooseLogo.png" className="App-logo" alt="logo" />
    {
      loginVisible ? 
      (
        <>
        <LoginForm setUser={setUser}/>
        <button className="login-button" onClick={()=> setLoginVisible(false)}>Signup</button>
        </>
      ) : (
        <>
        <SignupForm setUser={setUser}/>
        <button className="login-button" onClick={()=> setLoginVisible(true)}>Return to Login</button>
        </>
      )
    }
  </div>
)
}

export default Login