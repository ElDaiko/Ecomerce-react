import React from 'react';
import {productoStock} from '../../mocks/MockData'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ItemDetailContainer = () => {

    function consultarPromesa(confirmacion) {

        return new Promise((res, rej) => {
            setTimeout(() => {
                if (confirmacion) {
                    res(productoStock)
                }
                else {
                    rej("Acceso denegado")
                }
            }, 2000);
            
        })

    }

    const id = useParams().id

    const [details, setDetail] = useState({});
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setDetail(res.find((item) => item.id === id)))
            .catch(error => {
                console.error(error)
            })
    }, [id]);

    return (
        <div>
            <Navbar/>
            <ItemDetail details={details}/>
        </div>
    );
}

export default ItemDetailContainer;
