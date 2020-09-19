import React from 'react'
import { Link } from "react-router-dom";

import { useUserContext } from '../../context/cartContext.js';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




/* CSS */
import './CartIcon.css';

function CartIcon() {

    const { totalCarrito } = useUserContext();


    return (    
            <div className="linkCarrito">
                <Link to='/cart'>
                    <button style={{background:'transparent', border:'none', margin:'0 auto'}}>
                        <FontAwesomeIcon icon={faShoppingCart} className="iconCart float-left mt-3" />
                        <p className="float-left pl-2" style={{color:'#fff', paddingTop:'10px'}}> Ver Carrito ({totalCarrito}) </p>
                    </button> 
                </Link>     
            </div>
    );
}

export default CartIcon;