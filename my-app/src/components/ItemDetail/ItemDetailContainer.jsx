import React from 'react';
import {productoStock} from '../../mocks/MockData'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

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

    const id = useParams().id

    const [details, setDetail] = useState({});
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setDetail(res.find((item) => item.id === id)))
            .catch(error => {
                console.error(error)
            })
    }, [id]);
    console.log(details);

    return (
        <div>
            <ItemDetail details={details}/>
        </div>
    );
}

export default ItemDetailContainer;
