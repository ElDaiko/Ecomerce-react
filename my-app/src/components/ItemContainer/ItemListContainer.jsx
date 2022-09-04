import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {productoStock} from '../../mocks/MockData'
import Navbar from '../Navbar/Navbar';

const ItemListContainer = () => {
    
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
            <Navbar/>
            <ItemList productos={productos} />
        </div>
    );

}

export default ItemListContainer
