import React, {useState} from 'react'
import { useParams} from "react-router-dom";

import Item from '../Item';

/*BOOTSTRAP*/
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'


function ItemList(valores) { 


  const {categoria} = useParams();
  //console.log(categoria);

  let productos;

    if (categoria==='todos' || categoria==='') {
       productos = valores.products
       //console.log('todos')
    } else{
       productos = valores.products.filter(item => item.categoria===categoria)
       //console.log(productos)
    }
    
   

    const [cantidadElegida, setcantidadElegida] = useState();
    console.log(cantidadElegida)   

    function onChange(cantidadElegida) {
       setcantidadElegida(cantidadElegida)      
    }


    return (
      <Row>
      <Col md={12}>
        <CardDeck> 
        

        {productos.map(item => ( 
        
          <Item key={item.id} titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} stock={item.stock}  id={item.id} categoria={categoria}  onChange={onChange} />  
           
             
          ))}

        </CardDeck>
      </Col>
    </Row>
    );
}

export default ItemList;


