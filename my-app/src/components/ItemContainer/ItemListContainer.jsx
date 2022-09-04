import React from 'react';
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {productoStock} from '../../mocks/MockData'

const ItemListContainer = () => {

    const [stock, setStock] = useState(10)

    function onAdd(cont) {
        if (stock > 0 && cont <= stock) {
            console.log("se han confirmado", cont, "productos")
            setStock(stock - cont)
        }

    }

    function onReset() {
        console.log("se han resetado las adiciones")
        setStock(10)
    }

    
    
    function consultarPromesa(confirmacion) {

        return new Promise((res, rej) => {
            if (confirmacion) {
                res(productoStock)
            }
            else {
                rej("Acceso denegado")
            }
        })

    }

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setProductos(res))
            .catch(error => {
                console.error(error)
            })
    }, []);

    return (
        <div>
            <ItemCount stock={stock} onAdd={onAdd} onReset={onReset} productos={productos}/>
            <ItemList productos={productos} />
        </div>
    );

}

export default ItemListContainer
