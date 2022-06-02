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
        return <NavLink to="/" exact> Home </NavLink>
        }
      return <span><NavLink to="/" exact> Home </NavLink>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button></span>
        
}

export default NavBar;