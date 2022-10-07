
import React from 'react'
import './CartWidget.css'
import carrito from './img/carrito1.png'

function CartWidget() {
    return (
        <img src={carrito} alt='logo carrito de compras' className='imgCarrito'></img>
    )
}

export default CartWidget