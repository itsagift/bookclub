import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({setUser, user}) {

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        setUser(null)
    }

    const linkStyles = {
        // display: "inline-block",
        // width: "50px",
        // padding: "12px",
        // margin: "0 6px 6px",
        // background: "blue",
        // textDecoration: "none",
        // color: "white",
        ///
        fontFamily: 'Patrick Hand',
        fontSize: "1.25rem",
        background: "black",
        color: "white",
        borderRadius: "20px",
        padding: "5px",
        marginTop: "10px",
        textDecoration: "none"

      };

    if (!user) {
        return <span><NavLink to="/" exact style={linkStyles}> Home </NavLink></span>
        }
      return <span><NavLink to="/" exact style={linkStyles}> Home </NavLink>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button></span>
        
}

export default NavBar;