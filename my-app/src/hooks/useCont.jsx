import {useState} from 'react';

const UseCont = (stock) => {

    const [cont, setCont] = useState(1)

    function add() {
        if (cont < stock && cont > 0) {
            setCont(cont + 1)
        }

    }

    function sub() {
        if (cont > 1) {
            setCont(cont - 1)
        }

    }

    return {
        add, sub, cont
    };
}

export default UseCont;
