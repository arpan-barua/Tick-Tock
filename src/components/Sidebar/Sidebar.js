import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faHome, faTh, faPlusSquare, faUserPlus, faSignOutAlt, faCog} from '@fortawesome/free-solid-svg-icons'
import { loginContext } from '../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(loginContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {  
        fetch('https://lychee-pudding-73705.herokuapp.com/isAdmin',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
    }, []);

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
        <section>
            <div className="sidebar">
            <Link to="/dashboard"><FontAwesomeIcon icon={faTh}/> Dashboard</Link>
            <Link to="/home"><FontAwesomeIcon icon={faHome}/> Home</Link>
            <Link to="/orders"><FontAwesomeIcon icon={faCalendarCheck}/> Orders</Link>
            
                 <Link to="/manageProduct"><FontAwesomeIcon icon={faCog}/> Manage Product</Link>
                 <Link to="/addProduct"><FontAwesomeIcon icon={faPlusSquare}/> Add Product</Link>
                 <Link to="/addAdmin"><FontAwesomeIcon icon={faUserPlus}/> Add Admin</Link>
            
             <Link to="/login" onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt}/> Sign Out</Link>
             
            </div>
        </section>

      
    );
};

export default Sidebar;