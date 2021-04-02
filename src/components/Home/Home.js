import React, { useContext } from "react";
import { PageContext } from "../../App";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useContext(PageContext);
  return (
    <div className="products row">
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
