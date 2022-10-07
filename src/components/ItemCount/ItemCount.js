
import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ( {stock, onAdd} ) =>{
    // state para almacenar cantidad de cada producto
    const [cantidad, setCantidad] = useState(0)

    const sumarUno = () => {
        // control para no seguir sumando si llego al máximo de stock de unidades
        cantidad >= stock ? setCantidad(stock) : setCantidad(cantidad + 1)
    }

    const restarUno = () => {
        // control para no permitir nros negativos
        cantidad <= 0 ? setCantidad(0) : setCantidad(cantidad - 1)
    }

    const comprar = () =>{
        onAdd(cantidad)
    }

    return(
        <>
            {/* class con if ternario para agregar "sinStock" que tiene un display: none para ocultar y mostrar msj "SIN STOCK" en caso de que sea 0 */}
            <div className={stock === 0 ? 'itemCountContainer sinStock' : 'itemCountContainer'}>  
                <p className='sumar' onClick={restarUno}>-</p>
                <p className='cantidad'>{cantidad}</p>
                <p className='restar' onClick={sumarUno}>+</p>
            </div>
            <button className={stock === 0 ? 'comprar sinStock' : 'comprar'} onClick={comprar}>COMPRAR</button>

            <div className={stock === 0 ? 'itemCountContainer' : 'itemCountContainer sinStock'}>
                <p><strong>SIN STOCK</strong></p>
            </div>
        </>
    )
}

export default ItemCount