import React,  { useState, useEffect } from 'react'
/*BOOTSTRAP*/
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { useUserContext } from '../../../context/cartContext.js';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function ItemCount({initial, min, max, onAdd, id, titulo, precio, onChange}) {


    const [count, setCount] = useState(initial);    
    const agregarValor = () => count<max && setCount(count + onAdd); 
    const reducirValor = () => count>0 && count<=max && setCount(count - onAdd) ; 

    


     
 

    useEffect(      
      () => onChange(count)
      );

      

    const { addUser } = useUserContext();


    return (    
       
   
        <Row className="justify-content-md-center">
          <Col md={6} xs={6} >                 
            <Button variant="outline-success" className="float-left" onClick={reducirValor} disabled={count===0 && "true"}>-</Button>
                <p style={{fontSize:'16px', color:'#333', fontWeight:'bold', padding:'5px 5px 3px 5px', marginBottom:'0', width:'auto', float:'left'}}>{count}</p>
            <Button variant="outline-success" className="float-left" onClick={agregarValor}  disabled={count===max && "true"}>+</Button>
         </Col>
     
         <Col md={6} xs={6}>        
           <Button id="botonAgregar" variant="success" onClick={() => {addUser({ id: id, titulo: titulo, cantidad: count, precio: precio}); }}  style={{padding:'7px 5px 7px 5px', width:'100%'}} disabled={count===0 && "true"}>Agregar  <FontAwesomeIcon icon={faShoppingCart} className="iconCart float-left mt-1" /> </Button>
         </Col>
        </Row>
      
    
    );
}

export default ItemCount;


