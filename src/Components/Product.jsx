import React from 'react';
import ProductsList from './ProductsList';

function Product({product, handleAddProduct}) {
  return (
    <div>
        <ProductsList product={product} handleAddProduct={handleAddProduct}/>
    </div>
  )   
}

export default Product;
