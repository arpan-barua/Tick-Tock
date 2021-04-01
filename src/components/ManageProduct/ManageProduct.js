import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../App";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useContext(PageContext);
  console.log(products);
  return (
    <div>
      <div className="sidenav">
        <Link to="/manage-product">
          <a href="#">Manage Product</a>
        </Link>
        <Link to="/addProduct">
          <a href="#">Add Product</a>
        </Link>
      </div>
      <h5>Manage product</h5>
      {products.map((product) => (
        <div className="col-md-3">
          <div className="product-list d-flex justify-content-around align-items-center">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProduct;
