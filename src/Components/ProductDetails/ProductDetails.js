import React from 'react';
import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
// import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    
    return (
        <div>
            <h1>{productKey}coming soon........</h1>
        </div>
    );
};

export default ProductDetails;