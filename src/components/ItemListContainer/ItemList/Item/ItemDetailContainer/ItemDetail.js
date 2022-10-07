
import React from "react";
import './ItemDetail.css';
import ItemCount from "../../../../ItemCount/ItemCount";

const ItemDetail = ( {prods, id} ) => {

    console.log(prods)
    console.log(id)

    return(
        <>
            <div>
                <img className='imgProduct' src={prods[id].picurl} alt={`imagen ${prods[id].name}`} />
            </div>
            <div className='detailContainer'>
                <p className='itemName'>{prods[id].name}</p>
                <p className='itemDescription'>{prods[id].description}</p>
                <p className='itemPrice'>{`Precio: $${prods[id].price}`}</p>
                <ItemCount stock={prods[id].stock} />
            </div>
        </>
    )
}

export default ItemDetail