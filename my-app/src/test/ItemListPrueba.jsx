/* import { React, useState, useEffect } from 'react';


const productos = [
    { id: 1, nombre: "Hoodie Bendu", material: "Algodon", precio: 180.000, stock: 10 },
]
function consultarPromesa(confirmacion) {

    return new Promise((res, rej) => {
        if (confirmacion) {
            res(productos)
        } else {
            rej("Acceso denegado")
        }
    })

}

const ItemList = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then(data => {
                const productosJSX = data.map((producto, indice) =>
                        <div className="card text-white bg-primary mb-3 btncont2" key={indice}>
                            <div className="card-header">{producto.nombre}</div>
                            <div className="card-body">
                                <p className="card-text">Precio: ${producto.precio}</p>
                                <p className="card-text">Material: {producto.material}</p>
                                <p className="card-text">Stock: {producto.stock}</p>
                            </div>
                        </div>
                )
                console.log(productosJSX)
                setProductos(productosJSX)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);


    return (
        <div className='cardcontainer2'>
            {productos}
        </div>
    );
}

export default ItemList; */

