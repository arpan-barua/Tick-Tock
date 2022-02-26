import React, { useContext } from "react";
import { PageContext } from "../../App";
import Product from "../Product/Product";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Header/NavBar";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useContext(PageContext);
  return (
    <div>
      <NavBar/>
    <div className="products row d-grid gap-5 pt-5">
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
