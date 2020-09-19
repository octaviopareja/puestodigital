import React, {useEffect} from 'react'
import { useUserContext } from '../../../context/cartContext.js';

import Button from 'react-bootstrap/Button'

function BotonComprar({id,titulo,cantidad, precio}) {

    
        
    const { users, addUser } = useUserContext();

    useEffect(() => {
        console.log('receiving new user set');
    }, [users]);
 




    
    return (    
          
               <Button variant="info" style={{padding:'7px 5px 7px 5px', width:'100%'}} onClick={() => {addUser({ id: id, titulo: titulo, cantidad: cantidad, precio: precio}); }}>¡Comprar {cantidad} ahora!</Button>
    ) 
}

export default BotonComprar;