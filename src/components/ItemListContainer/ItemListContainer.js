
import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'

function ItemListContainer({greeting}) {
    return (
        <div className='itemListContainer'>
            <h2 className='saludo'>{greeting}</h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer