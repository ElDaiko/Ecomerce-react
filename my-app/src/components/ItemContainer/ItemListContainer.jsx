import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {productoStock} from '../../mocks/MockData'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    function consultarPromesa(confirmacion) {

        return new Promise((res, rej) => {
            setTimeout(() => {
                if (confirmacion) {
                    res(productoStock)
                }
                else {
                    rej("Acceso denegado")
                }
            }, 1500);
        })

    }
    const categoria = useParams().categoria

    
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setProductos(res.filter((item) => item.categoria === categoria)))
            .catch(error => {
                console.error(error)
            })
    },[categoria]);

    return (
        <div>
            <Navbar/>
            <ItemList productos={productos} />
        </div>
    );

}

export default ItemListContainer
