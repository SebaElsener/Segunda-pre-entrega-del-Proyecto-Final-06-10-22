
import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() =>{
        fetch('https://www.mockachino.com/7ce364be-cac3-49/cellytablet')
            .then((res) => res.json())
            .then((json) => setProductos(json.cellytablet))
    },[])

    return (
        <>
            <ItemDetail prods={productos} id={id} />
        </>
    )
}

export default ItemDetailContainer