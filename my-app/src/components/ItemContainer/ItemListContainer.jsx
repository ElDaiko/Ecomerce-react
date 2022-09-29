import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemListContainer = () => {

    const categoria = useParams().categoria
    const [productos, setProductos] = useState([]);

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

    return (
        <div>
            <Navbar />
            <ItemList productos={productos} />
        </div>
    );

}

export default ItemListContainer
