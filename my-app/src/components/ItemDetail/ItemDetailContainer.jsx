import React from 'react';
import {productoStock} from '../../mocks/MockData'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

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

    const [details, setDetail] = useState({});
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setDetail(res.find((item) => item.id === 2)))
            .catch(error => {
                console.error(error)
            })
    }, []);
    console.log(details);

    return (
        <div>
            <ItemDetail details={details}/>
        </div>
    );
}

export default ItemDetailContainer;
