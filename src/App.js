import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AddProduct from "./components/AddProduct/AddProduct";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddAdmin from "./components/AddAdmin/AddAdmin";

export const PageContext = createContext();
export const loginContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://lychee-pudding-73705.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <loginContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <PageContext.Provider value={[products, setProducts]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout/:id">
              <Checkout />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct />
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <AddAdmin/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </PageContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
