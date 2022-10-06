import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import BounceLoader from "react-spinners/BounceLoader";

const ItemListContainer = () => {

    const categoria = useParams().categoria
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
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
            {
                loading?
                <div>
                    <BounceLoader className='loader' color={'#000'} loading={loading} size={80} aria-label="Loading Spinner"/>
                    <p className='text-loader'>充電</p>
                </div>
                
                :
                <ItemList productos={productos} />
            }
            
            
        </div>
    );

}

export default ItemListContainer
