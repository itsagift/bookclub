import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

function NavBar({setUser}) {

    const handleLogout = async () => {
        let req = await fetch('/logout', {
            method: "DELETE"
        })
        setUser(null)
    }
    // async function handleLogout(){
    //     let req = await fetch('/logout', {
    //       method: "DELETE"
    //     })
    //     setUser(null)
    //   }
  return (
    <span>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <button className="login-button" onClick={()=> handleLogout()}>Logout</button>
      {/* <NavLink to="/logout" exact>
        Logout
      </NavLink> */}
    </span>
  );
}

export default NavBar;