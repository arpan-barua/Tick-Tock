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
      {/* <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="site-name navbar-brand" href="#">
            <h3>GEO SMART</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/home">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/orders">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </Link>
              <Link to="/admin">
                <a className="nav-link" href="#">
                  Admin
                </a>
              </Link>
              <Link>
                <a className="nav-link" href="#">
                  Deals
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
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
