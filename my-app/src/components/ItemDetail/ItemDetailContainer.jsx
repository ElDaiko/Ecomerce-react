import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const ItemDetailContainer = () => {

    const id = useParams().id
    const [details, setDetail] = useState({});

    //Firebase
    useEffect(() => {
        //Que base y en cual coleccion esta
        const productos = collection(db, "Bendu")
        const reference = doc(productos, id)

        getDoc(reference)
            .then((res) => {
                setDetail({
                    id: res.id,
                    ...res.data()
                })
            })
            .catch((error) => console.log(error))
    }, [id])

    if (!details.id) return null

    return (
        <div>
            <Navbar />
            <ItemDetail details={details} />
        </div>
    );
}

export default ItemDetailContainer;
