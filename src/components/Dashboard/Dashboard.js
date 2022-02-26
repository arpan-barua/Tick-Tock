import React from "react";
import Sidebar from "../Sidebar/Sidebar";
// import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-2">
      <Sidebar></Sidebar>
      </div>
      <div className="dashboard-container col-md-10 jumbotron p-5">
        <h1 className="display-4">Welcome to Dashboard!</h1>
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
          <a className="btn btn-light btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
