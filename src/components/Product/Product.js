import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {name, price, imageURL, _id} = props.product;
    return (
        <div className="product">
            <img src={imageURL} alt=""/>
            <h3>{name}</h3>
            <h2>{price}</h2>
            <Link to={`/checkout/${_id}`}><button className="btn btn-danger">Buy Now</button></Link>
            
        </div>
    );
};

export default Product;