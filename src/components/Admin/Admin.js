import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <div className="sidenav">
        <Link to="/manage-product">
          <a href="#">
            <h6>Manage Product</h6>
          </a>
        </Link>
        <Link to="/addProduct">
          <a href="#">
            <h6>Add Product</h6>
          </a>
        </Link>
      </div>
      <div className="admin-home jumbotron">
        <h1 className="display-4">Welcome to Admin!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          delectus nihil odit natus necessitatibus ex.
        </p>
        <hr className="my-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          eligendi!
        </p>
        <p className="lead">
          <a className="btn btn-danger btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Admin;
