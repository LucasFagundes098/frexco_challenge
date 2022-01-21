import { useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Product from '../Components/Product';
import Cart from '../Components/Cart';


function App({product}) {

  const [cartItems, setCartItems] = useState([]);

      const handleAddProduct = (prod) => {
        const productExist = cartItems.find((item) => item.id === prod.id);
        if(productExist){
          setCartItems(cartItems.map((item) => item.id === prod.id ? {...productExist, qty: productExist.qty + 1}: item))
        } else {
          setCartItems([...cartItems, {...prod, qty: 1}])
        }
      }

      const handleRemoveProduct = (prod) => {
        const productExist = cartItems.find((item) => item.id === prod.id);
        if(productExist.qty === 1){
          setCartItems(cartItems.filter((item) => item.id !== prod.id))
        } else {
          setCartItems(cartItems.map((item) => item.id === product.id ? {...productExist, qty: productExist.qty - 1} : item))
        }
      }

      const handleCartClear = () => {
        setCartItems([]);
      }

  return (
    <Router>
      <>
        <div className="app">
        <Navbar cartItems={cartItems}/>
            <div className='container'>
            {/* routes  */}
              <Routes>
                <Route path ='/' exact element={<Product product={product} handleAddProduct={handleAddProduct}/>} />
                <Route path ='/cart' exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>} />
              </Routes> 
            </div>

          </div> 
      </>
    </Router>
  );
}

export default App;
