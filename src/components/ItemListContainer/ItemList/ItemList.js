
import React from "react";
import { useEffect, useState } from "react";
import Item from './Item/Item';
import './ItemList.css';

const ItemList = () =>{

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        fetch('https://www.mockachino.com/7ce364be-cac3-49/cellytablet')
            .then((res) => res.json())
            .then((json) => setProductos(json.cellytablet))
    },[])

    return(
        <div className='itemList'>
            {productos.map((prods) => (<Item prods={prods} key={prods.id} />))}
        </div>
    )
}

export default ItemList