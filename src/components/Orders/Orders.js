import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../App";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Header/NavBar";
import "./Order.css";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <NavBar/>
    <div className="order-card">
      <div>
        <h3>You have {orders.length} orders</h3>
        {orders.map((order) => {
          return (
            <div className="card rounded-pill mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="order-image col-md-4">
                  <img src={order.imageURL} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="order-description card-text">{order.name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Orders;
