import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { key } = useParams();
    const product = fakeData.find (pd=>pd.key === key);
    return (
        <div>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetails;