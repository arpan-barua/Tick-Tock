import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../App";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useContext(PageContext);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5055/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
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
      <h5>Manage product</h5>
      {products.map((product) => {
        return (
          <div className="col-md-3">
            <div className="product-list d-flex justify-content-around align-items-center">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageProduct;
