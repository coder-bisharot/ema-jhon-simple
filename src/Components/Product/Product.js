import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product
    return (
        <div className="product">
            <div>
             <img src={img} alt=""/> 
            </div>
            <div className="product-data">
                <h4 className="product-name"> <Link to={"product/"+key}>{name} </Link> </h4>
                <p> <small>BY {seller} </small></p>
                <p>${price}</p>
                <p><small> Only {stock} Left in stock - Order Soon </small></p>
                <button className="main-button" onClick = {() => props.handleAddProduct (props.product)}><FontAwesomeIcon icon={faCartPlus} /> add to cart  
                </button>
        
            </div>
        </div>
    );
};

export default Product;