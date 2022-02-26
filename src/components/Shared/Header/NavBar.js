import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../../../App";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);

  const handleSignOut = () =>{
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      success: false
    }
    setLoggedInUser(signedOutUser);
  }
  return (
    <div>
      <nav style={{backgroundColor:'black'}} className="navbar navbar-expand-md navbar-dark fixed-top">
  <div className="container-fluid">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link pe-4">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/dashboard" className="nav-link pe-4">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link to="/orders" className="nav-link pe-4">Orders</Link>
        </li>
        <li className="nav-item">
        {
        loggedInUser.isSignedIn ? <Link to="/login" onClick={handleSignOut} className="nav-link p-4">Sign Out</Link>
         : 
        <Link to="/login" className="nav-link pe-4">Sign in</Link>
         }
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
