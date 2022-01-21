import React from 'react'

function ProductsList({product, handleAddProduct}) { 
    return (
        <div className='product-list'>
            <h3 className='product-title'>Produtos</h3>
            <div className='data-result'>
                {product.map((value) => {
                    return (
                        <div className='data-result-item' key={(value.id)}>
                           <h3>{value.name}</h3>
                           <button className='product-add-button' onClick={() => handleAddProduct(value)}>Adicionar ao carrinho</button>
                         </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsList;
