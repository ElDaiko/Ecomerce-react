import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
/* import { productoStock } from '../../mocks/MockData' */
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemListContainer = () => {

    /* function consultarPromesa(confirmacion) {

        return new Promise((res, rej) => {
            if (confirmacion) {
                res(productoStock)
            }
            else {
                rej("Acceso denegado")
            }
        })
    } */
    const categoria = useParams().categoria
    const [productos, setProductos] = useState([]);

    //Firebase
    useEffect(() => {
        const productos = categoria ? query(collection(db, "Bendu"), where("categoria", "==", categoria)) :collection(db, "Bendu")
        getDocs(productos)
            .then((res) => {
                const lista = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(lista)
            })
            .catch((error)=>console.log(error))
    }, [categoria])


    //Mock
    
    /* useEffect(() => {
        consultarPromesa(true)
            .then((res) => setProductos(res.filter((item) => item.categoria === categoria)))
            .catch(error => {
                console.error(error)
            })
    }, [categoria]); */

    return (
        <div>
            <Navbar />
            <ItemList productos={productos} />
        </div>
    );

}

export default ItemListContainer
