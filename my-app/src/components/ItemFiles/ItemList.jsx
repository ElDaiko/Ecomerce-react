import { React, useState, useEffect } from 'react';
import Item from './Item';


const productoStock = [
    { id: 1, nombre: "Hoodie Bendu", material: "Algodon", precio: 180.000, stock: 10 },
]
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

const ItemList = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then((res) => setProductos(res))
            .catch(error => {
                console.error(error)
            })
    }, []);


    return (
        <div className='cardcontainer2'>         
            {productos.map((item) => (<Item key={item} producto={item} />))}     
        </div>
    );
}

export default ItemList;
