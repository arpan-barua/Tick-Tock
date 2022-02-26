import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { loginContext, PageContext } from "../../App";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Header/NavBar";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);
  const [products, setProducts] = useContext(PageContext);
  const [checkOut, setCheckOut] = useState({});

  const handleCheckOut = () => {
    const newOrders = { ...loggedInUser, ...checkOut };

    fetch("https://lychee-pudding-73705.herokuapp.com/addOrders", {
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

    setCheckOut({
      name,
      price,
      imageURL,
    });
  }, [id]);
  return (
    <div>
      <NavBar/>
    <div className="checkout-container d-flex align-items-center row">
      <div className="col-md-5">
      <img className="img-fluid" src={checkOut.imageURL} alt="" />
      </div>
      <div className="table-section col-md-5 ms-5 ps-5">
        <table className="checkout-table" style={{ width: "500px" }}>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{checkOut.name}</td>
            <td>{checkOut.price}</td>
          </tr>
        </table>

        <Link to="/orders">
          <button className="btn btn-danger mt-2" onClick={handleCheckOut}>
            CheckOut
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;
