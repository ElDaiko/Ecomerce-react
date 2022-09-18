import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../context/CartContext';
const Cart = () => {
    /* const{cart} = useContext(CartContext) */
    const { cart } = useCart()
    console.log('carrito', cart);

    return (
        
        <div>
            <Navbar />\
            <div className='card'>
            {cart.map((element) =>
                <div key={element.id} className="cartstuff"> {/* paso el key al inicio del render dadoa  que todo item debe de tener el identificador */}
                    <span>{element.nombre} </span>
                    <span>{element.precio}</span>
                    <div>
                        <img className='itemCart' src={`/assets/images/${element.img}`} alt='img'/>
                    </div>
                    
                </div>
            )}
            </div>
        </div>
    );
}

export default Cart;
