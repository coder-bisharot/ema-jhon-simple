import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const frist15 = fakeData.slice(0,15);
  const [product] = useState(frist15);
  const [cart, setCart] = useState ([]);

  const handleAddProduct = (product) => {
  const newCart = [...cart, product];
  setCart (newCart);


  }
    return (
        <div className="shop-container">
           <div className="product-container">
                    {
                        product.map(product => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={product}> 
                        </Product> )
                    }   
            </div>
            <div className="cart-container">
                  <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;