import React, {useState, useEffect} from 'react'
import {getFirestore} from '../../../firebase/index'
import {useParams} from "react-router-dom";

import Cargando from '../../Cargando/Cargando';

import Item from '../Item';

/*BOOTSTRAP*/
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'


function ItemList(data) { 


 // console.log(data);
/*
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
 */   

    const {categoria} = useParams();

    //console.log('ITEMLIST: la categoria elegida es:'+categoria)

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

   // console.log(products)

    useEffect(() => {     
      
     // console.log('la categoria elegida es:'+categoria)
      //console.log('renderizando de nuevo')
      
      const db = getFirestore();
      const products= db.collection('items');  
      
      let itemSearch;

      if  (categoria==='todos' || categoria==='' || categoria === null || categoria === undefined) {
        itemSearch = products    
      } else {
        itemSearch = products.where('categoria', '==', categoria);  
      }
      
      itemSearch.get().then((querySnapshot) => {
      setLoading(false); // Set state -> Render
      setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}))); 
      });
    
      }, [categoria]);


    const [cantidadElegida, setcantidadElegida] = useState();
    //console.log(cantidadElegida)   

    function onChange(cantidadElegida) {
       setcantidadElegida(cantidadElegida)      
    }


    return (

   
      <Row>
      <Col md={12}>

        {  loading  ? 
          <Cargando titulo="Cargando..."/>
          :
          <CardDeck>         

          {  products.map(item => ( 

          <Item key={item.id} titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} stock={item.stock}  id={item.id} categoria={item.categoria}  onChange={onChange} />  
                        
          ))}

        </CardDeck>
        }

      </Col>
    </Row>
    );
}

export default ItemList;


