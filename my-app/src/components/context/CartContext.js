import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (item) =>{
        setCart([...cart, item])
         const added = cart.find((prod) => prod.id === item.id)
        if(added){
            const actualized = cart.map((prod)=> {
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }
                else{
                    return prod
                }
            })
            setCart(actualized)
        }
        else{
            setCart([...cart, item])
        } 
        
    }

    const clear= () =>{
        setCart([])
    }

    const removeItem= (id) =>{
        setCart(cart.filter((prod)=>prod.id !== id))
    }

    const isIncart= (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    const totalCart = () =>{
        let cont = 0;
        cart.forEach((item) => {
            cont += (item.quantity * item.precio)
        })
        return cont;

    }

    const totalQuantity = () =>{
        let quantity = 0;
        cart.forEach((element) =>{
            quantity += (element.quantity)
        })
        return quantity;
    }

    return(
        <CartContext.Provider value={{cart, clear, isIncart, removeItem, addItem, totalCart, totalQuantity}}>
            {children} {/* se usa la prop children para enviar los datos a todo componente que lo necesite y envuelva */}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)