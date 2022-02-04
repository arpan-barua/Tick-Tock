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
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import ManageProduct from "./components/ManageProduct/ManageProduct";

export const PageContext = createContext();
export const loginContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://lychee-pudding-73705.herokuapp.com/products",{mode: 'no-cors'})
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <loginContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <PageContext.Provider value={[products, setProducts]}>
        <Router>
          <Header />
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
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/manage-product">
              <ManageProduct />
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct />
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
