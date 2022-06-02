import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({setUser, user}) {

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        setUser(null)
    }

    if (!user) {
        return <span><NavLink to="/" exact><button className="login-button">Home</button></NavLink></span>
        }
      return <span><NavLink to="/" exact><button className="login-button">Home</button></NavLink>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button></span>
        
}

export default NavBar;