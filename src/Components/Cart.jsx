import React from 'react';

function Cart({cartItems, handleAddProduct, handleRemoveProduct, handleCartClear}) {
  return (
    <div className='cart-items'>

      {/* clear cart  */}
      <div className='clear-cart'>
      <h3>Carrinho de compras</h3>
        {cartItems.length >=1 && (
          <button className='clear-cart-button' onClick={handleCartClear}>Limpar carrinho</button>
        )}
      </div>
      
      {cartItems.length === 0 && (<div className='cart-no-items-title'>Nenhum produto adicionado.</div>)}
          
        {/* cart items  */}
        <div className='cart-data-result-item'>
          {cartItems.map((item, key) => {
            {/* cart products  */}
            return(
              <div key={(key)} className='cart-item-list'>
                <div>
                 <h4>{item.name}</h4>
                 <p>Gênero : {item.genus}</p>
                 <p>Família : {item.family}</p>
                 <p>Ordem : {item.order}</p>
                    <div className='cart-items-functions'>
                      <button className='product-button' onClick={() => handleAddProduct(item)}>+</button>
                      <button className='product-button' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                  <p>{item.qty}</p>
                </div>
                {/* nutritional information  */}
                  <div className='cart-item-info'>
                  <h4>Valores nutricionais</h4>
                      <p>Carboidratos : {item.nutritions.carbohydrates}</p>
                      <p>Proteínas : {item.nutritions.protein}</p>
                      <p>Gordura : {item.nutritions.fat}</p>
                      <p>Calorias : {item.nutritions.calories}</p>
                      <p>Açúcar : {item.nutritions.sugar}</p>
                  </div>
                  
              </div> 
            )
          })}
        </div>
    </div>
  )
}

export default Cart;
