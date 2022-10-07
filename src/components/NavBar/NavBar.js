
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.js'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className='navBrand'>
                <h1 className='brandName'><Link className='link' to={'/ItemListContainer'}><span className='IE'>IE</span> Reparaciones</Link></h1>
            </div>
            <ul>
                <li><Link className='link' to={'/ItemListContainer'}>PRODUCTOS</Link></li>
                <li>SERVICIOS</li>
                <li>SOBRE NOSOTROS</li>
                <li>CONTACTO</li>
                <li><Link className='link' to={'/ItemListContainer'}>INICIO</Link></li>
                <li className='carrito'>{<CartWidget />}</li>
            </ul>
        </nav>
    )
}

export default NavBar