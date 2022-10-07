
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../../ItemCount/ItemCount";
import './Item.css';

const Item = ({ prods }) =>{

    return(
        <div className='ItemContainer'>
            <p className='itemName'>{prods.name}</p>
            <Link to={`/Item/${prods.id}`}><img className='imgProduct' src={prods.picurl} alt={` imagen ${prods.name}`} /></Link>
            <p className='itemPrice'>{`Precio: $${prods.price}`}</p>
            <ItemCount stock={prods.stock} />
        </div>
    )
}

export default Item
