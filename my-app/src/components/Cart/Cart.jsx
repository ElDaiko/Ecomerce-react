import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    /* const{cart} = useContext(CartContext) */
    const { cart, removeItem, totalCart } = useCart()
    console.log('carrito', cart);

    return (
        <>
            <Navbar />
            {cart.length > 0 ?
                <div className='card'>
                    {cart.map((element) =>
                        <div key={element.id} className="cartstuff"> {/* paso el key al inicio del render dadoa  que todo item debe de tener el identificador */}
                            <span>{element.nombre} Precio: {element.precio} Cantidad: {element.quantity}</span>
                            <div>
                                <img className='itemCart' src={element.img} alt='img' />
                            </div>
                            <button className='btn' onClick={() => removeItem(element.id)}>Eliminar el producto</button>
                        </div>
                    )}
                    <div>
                        <h4>Precio total: {totalCart()} </h4>
                        <button>Comprar</button>
                    </div>
                </div>
                : <Link to="/">
                    <button className='card btn'>
                        Comprar productos!
                    </button>
                </Link>
            }</>

    );
}

export default Cart;
