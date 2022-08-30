/* import React, { useEffect, useState } from 'react';

const Dolar = () => {
    const [dolar, setDolar] = useState({})
    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then(({ solidario, mep, blue }) =>
                setDolar(Object.entries({ solidario, mep, blue }).map((dolar, indice) =>
                    <p> key={indice} Dolar {dolar[0]}: ${dolar[1]}</p>)))
    }, [{}]);
    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar; */
