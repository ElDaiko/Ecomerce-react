import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../context/CartContext';
import { addDoc, collection} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    const [orderId, setOrderId] = useState();
    const { cart, totalCart} = useCart()
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { name, email, phone } = buyer;

    const handleInputChange = (form) => {
        setBuyer(({
            ...buyer,
            [form.target.name]: form.target.value
        }))
    }

    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
        } catch (error) {
            console.log(error)
        }
    }
/* 
    const actStock = async (items) => {
        try {
            const productos = categoria ? query(collection(db, "Bendu"), where("categoria", "==", categoria)) :collection(db, "Bendu")
            updateDoc(items)
        } catch (error) {
            console.log(error)
        }
    } */

    const handleSubmit = (form) => {
        form.preventDefault()
        const items = cart.map(form => { return { id: form.id, title: form.nombre, price: form.precio, quantity: form.quantity } })
        const dia = new Date()
        const total = totalCart()
        const data = { buyer, items, dia, total }
        console.log(data);
        generateOrder(data)
        /* actStock(items) */
    }

    return (
        <div>
            <Navbar />
            <h2>Order data</h2>
            {!orderId ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='Name' value={name} onChange={handleInputChange} />
                        <input type="text" name='email' placeholder='Email' value={email} onChange={handleInputChange} />
                        <input type="text" name='phone' placeholder='Phone' value={phone} onChange={handleInputChange} />
                        <input type="submit" value='Buy' />
                    </form>
                </div> :
                <div>
                    <h2>Your order id is: {orderId} </h2>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                </div>}

        </div>
    )
}

export default Checkout;


