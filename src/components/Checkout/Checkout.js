import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PageContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(PageContext);
  const [products, setProducts] = useContext(PageContext);
  const handleCheckOut = () => {
    const newOrders = { ...loggedInUser, ...products };
    fetch("http://localhost:5055/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrders),
    });
  };
  useEffect(() => {
    const filteredProduct = products.filter((product) => {
      return product._id == id;
    });
    const { name, price, imageURL } = filteredProduct[0];

    setProducts({
      name,
      price,
      imageURL,
    });
  }, [id]);
  return (
    
      <div className="checkout-container d-flex align-items-center">
        <img src={products.imageURL} alt="" />
        <div className='table-section'>
          <table className="checkout-table" style={{ width: "500px" }}>
            <tr>
              <th>Description</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{products.name}</td>
              <td>{products.price}</td>
            </tr>
          </table>
        

        <Link to="/orders">
          <button className="btn btn-danger mt-2" onClick={handleCheckOut}>
            CheckOut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
