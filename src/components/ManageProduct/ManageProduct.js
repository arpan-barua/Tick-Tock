import React, { useContext } from "react";
import { PageContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useContext(PageContext);
  const deleteProduct = (id) => {
    fetch(`https://lychee-pudding-73705.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <h5 className="pt-4">Manage product</h5> <br />
      {products.map((product) => {
        return (
          <div className="col-md-3">
            <div className="product-list rounded-pill d-flex justify-content-around align-items-center">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button
                className="btn btn-dark rounded-pill"
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
