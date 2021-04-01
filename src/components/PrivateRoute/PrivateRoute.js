import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import {PageContext} from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(PageContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;