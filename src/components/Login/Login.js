import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { loginContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="login-section">
        <button className="google-button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <br />
        <h6>or</h6>
        <form action="">
          <input
            type="text"
            name=""
            placeHolder="Enter Your Email"
            id=""
            className="form-control"
          />
          <br />
          <input
            type="password"
            name=""
            placeHolder="Enter Your Password"
            id=""
            className="form-control"
          />
          <br />
          <input
            type="button"
            value="Login"
            className="form-control btn btn-danger"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
