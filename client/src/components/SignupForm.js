function SignupForm ({setUser}) {

    const handleSignUp = async () => {
      let form = new FormData(document.querySelector('#signup-form'))
        let req = await fetch('/signup', {
          method: "POST",
          body: form
        })
        let res = await req.json();
        if (req.ok) {
          setUser(res.username)
        }
        else {
          alert(res.errors)
        }
    }
    
    return (
        <form id="signup-form" className="account-form" onSubmit={(e) => {
            e.preventDefault();
            handleSignUp()
            }}>
            <input type="text" className="input-text" name="username" placeholder="Username"></input>
            <input type="email" className="input-text" name="email" placeholder="Email"></input>
            <input type="password" className="input-text" name="password" placeholder="Password"></input>
            <input type="password" className="input-text" name="password_confirmation" placeholder="Confirm Password"></input>
            <input type="submit" className='form-button' value="Sign Up"></input>
          </form>
    )
}

export default SignupForm;