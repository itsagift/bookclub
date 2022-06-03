import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({setUser, user}) {

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        setUser(null)
    }

        
        return (
        <div className="nav-bar">
            <div className="nav-bar-buttons"><NavLink to="/" exact><button className="logout-button">Home</button></NavLink>
            <button className="logout-button" onClick={()=> handleLogout()}>Logout</button></div>
            <div className="nav-bar-welcome">Welcome, {user}</div>
        </div>
        )
        
}

export default NavBar;