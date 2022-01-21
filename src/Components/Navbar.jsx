import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar({cartItems}) {
    return (
        <nav className='navbar'>
            <h1>Frexco</h1>
            <div className='navbar-links'>
                        <Link to='/'>Produtos</Link>
                        <Link to='/cart'>
                            <i className='cart-icon'><FaShoppingCart/></i>
                        </Link>
                <span className='cart-length'> 
                    {cartItems.length === 0 ? "" : cartItems.length}
                </span>
            </div>
        </nav>
    )
}

export default Navbar
