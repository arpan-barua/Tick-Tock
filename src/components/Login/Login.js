import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {loginContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
import NavBar from '../Shared/Header/NavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";



const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(loginContext);
    const [newUser, setNewUser] = useState(false);
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then(res => {
    const {displayName, email} = res.user;
    const signedInUser = {
    isSignedIn: true,
    name:displayName,
    email:email,
    }
    setLoggedInUser(signedInUser);
    history.replace(from);
 })
 .catch(err =>{
   console.log(err);
 })
 }

    const handleBlur = (e) =>{
        let isFieldValid;
        if(e.target.name === "email"){
         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
         const isPasswordValid = e.target.value.length > 6;
         const isPasswordHasDigit = /\d{1}/.test(e.target.value);
         isFieldValid = isPasswordValid && isPasswordHasDigit;
        }
        if(e.target.name === "name"){
         isFieldValid = e.target.value;
        }
        if(isFieldValid){
          let newUserInfo = {...loggedInUser};
          newUserInfo[e.target.name] = e.target.value;
          setLoggedInUser(newUserInfo);
        }
      }
     
      const handleSubmit = (e) =>{
     if(newUser && loggedInUser.email && loggedInUser.password){
       firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
       .then(res => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error= '';
         newUserInfo.success = true;
         setLoggedInUser(newUserInfo);
       })
       .catch((error) => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error = error.message;
         newUserInfo.success = false;
         setLoggedInUser(newUserInfo);
       });
     }
     
     if(!newUser && loggedInUser.email && loggedInUser.password){
       firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
       .then(res => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error= '';
         newUserInfo.success = true;
         setLoggedInUser(newUserInfo);
       })
         
       .catch((error) => {
         const newUserInfo = {...loggedInUser};
         newUserInfo.error = error.message;
         newUserInfo.success = false;
         setLoggedInUser(newUserInfo);
       });
     }
     
     e.preventDefault();
      }
    return (
        <div>
          <NavBar/>
            <div className="body">
            <div className="login-area">
                {newUser ? <h3>Create an account</h3> : <h3>Sign-In</h3>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input className='form-control' type="text" name="name" onBlur={handleBlur} id="" placeholder="Your Name" required/>}
                    <br/>
                    <input className='form-control' type="text" name="email" onBlur={handleBlur} id="" placeholder="Email" required/>
                    <br/>
                    <input className='form-control' type="password" name="password" onBlur={handleBlur} id="" placeholder="Password" required/>
                    <br/>
                    {newUser && <input className='form-control' type="password" name="confirm-password" onBlur={handleBlur} id="" placeholder="Confirm Password" required/>}
                    <br/>
                    <input className='form-control btn btn-danger' type="submit" value={newUser ? 'Sign Up' : 'Sign-In'}/>
                </form>
                <br/>
                
                <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)} id=""/>
     <label htmlFor="newUser">New User Sign up</label>
     <p style={{color:'red'}}>{loggedInUser.error}</p>
     {loggedInUser.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} Successfully</p>}
            </div>
            
            </div>
            <div className="google-btn">
          <button
            className="btn btn-light rounded-pill"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <FontAwesomeIcon icon={faGoogle} /> Continue with Google{" "}
          </button>
        </div>
        </div>
    );
};

export default Login;