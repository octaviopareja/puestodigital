import React, {useState} from 'react';
import {Link} from "react-router-dom";

import { useUserContext } from '../../context/cartContext.js';

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import {getFirestore} from '../../firebase'
import * as firebase from 'firebase/app'

import Cargando from '../Cargando/Cargando';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Carrito() {

  const { users, removeUser, total, cleanCart, totalCarrito } = useUserContext();

     /* LOADING*/
     const [orderId, setOrderId] = useState(null);
     const [loading, setLoading] = useState(false);
     const [enviado, setEnviado] = useState(null);
     const [orderFinal, setOrderfinal] = useState(null);

      const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        email2: ''
      })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.id] : event.target.value
    })
  }

  const enviarDatos = (event) => {

    const items = users.map(cartItem => ({id: cartItem.id, titulo:cartItem.titulo, cantidad:cartItem.cantidad, precio:cartItem.precio}))

    event.preventDefault()

    const db = getFirestore();
    const orders= db.collection('orders');  

    const newOrder = { buyer: datos, 
                       items: items,
                       date: firebase.firestore.Timestamp.fromDate(new Date()),
                       total: total                
                    }

    orders.add(newOrder).then(({id}) => {
      setOrderId(id); //Success
      setOrderfinal(newOrder);
      setLoading(true); //muestro el loading      
    }).catch(err => {
      setEnviado(false); //error, no enviado
    }).finally(() => {       
      setTimeout(() => { 
      cleanCart();  // limpio el carrito        
      setLoading(false); //saco loading  
      setEnviado(true); //pongo true en el enviado 
      }, 2000);    
    }); 

    // BUSCO LA ORDEN EN FIREBASE PARA MOSTRARSELA AL CLIENTE AL FINAL DEL PROCESO
   }
   

   //console.log({datos})
   //console.log(orderFinal)

   return (
      <Container fluid className="bg-light-gray shadow border">
        <Container>
          <Row className="pt-4"> 
            <Col md={6} xs={12} >
              <h1 className="text-left mb-0">Mi Carrito</h1> 
            </Col>
            <Col md={6} xs={12} className="text-right">
            {  (users.length>0 && (enviado===false || enviado===null)) ? (  <Button variant="warning" className="mt-1" onClick={() =>  cleanCart()}>Limpiar Carrito</Button> ) : '' }
            </Col>
          </Row> 
          <Row> 
            <Col md={12} className="pb-4 h-100">
           
              <hr></hr>

              { 
                // SI HAY PRODUCTOS EN EL CARRITO, Y EL ENVIADO NO EXISTE
                (users.length>0 && (enviado===false || enviado===null)) ? (
                <>
                               
                { 
                  // SI EL LOADING ES VERDADERO MUESTRO ESTO
                  loading  ? 
                    <Cargando titulo="Enviando datos..."/>
                  : // SINOO MUESTRO LA TABLA CON ELC ARRITO   
                  <>
                  <Table striped bordered hover>

                    <thead>
                      <tr>                                  
                        <th>Titulo</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th></th>  
                      </tr>
                    </thead>
                    <tbody>

                      {users.map(u =>
                        <tr key={u.id}>                   
                          <td>{u.titulo}</td>
                          <td>{u.cantidad}</td>
                          <td>{u.precio}</td>
                          <td>$ {u.precio * u.cantidad} </td>
                          <td><Button variant="warning" onClick={() => removeUser(u)}>Quitar</Button></td>                       
                        </tr> 
                        )
                      }
                      <tr>
                        <td><p style={{textAlign:'right', width:'100%', fontWeight:'bold'}}>Cantidad de productos</p></td>
                        <td><p style={{textAlign:'left', width:'100%', fontWeight:'bold'}}>{totalCarrito}</p></td>
                        <td><p style={{textAlign:'right', width:'100%', fontWeight:'bold'}}>Total</p></td>
                        <td colSpan="2"><p style={{textAlign:'left', width:'100%', fontWeight:'bold'}}>$ {total}</p></td>
                      </tr>
                      
                    </tbody>
                    </Table>

                    <hr></hr>

                    <h3 className="text-center pb-2">Mis datos</h3> 

                    <hr></hr>                  
                    
                    <Form onSubmit={enviarDatos}>
                      <Form.Row>
                        <Form.Group as={Col} controlId="nombre" >
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control type="text" placeholder="Ingrese su nombre" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="apellido">
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control type="text" placeholder="Ingrese su apellido" onChange={handleInputChange} />
                        </Form.Group>
                      
                      </Form.Row>

                      <Form.Row>
                      <Form.Group as={Col} controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Ingrese su email" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email2">
                          <Form.Label>Verificar Email</Form.Label>
                          <Form.Control type="email" placeholder="Ingrese su email nuevamente" onChange={handleInputChange}/>
                        </Form.Group>
                      </Form.Row>

                      <Button variant="success" type="submit" className="float-right btn-lg" disabled={datos.nombre==='' || datos.email==='' || datos.email==='' || (datos.email !== datos.email2) }>
                        Enviar mi orden
                      </Button>
                    </Form>
                    </>
                             
                } 

                
              </>
              )  

              : // SI ENVIADO ES TRUE 

              (enviado  ? 
              <Col className="text-center">

              <p className="badge badge-success mx-auto mt-4" style={{fontSize:'25px'}}>Tu orden fue enviada correctamente</p>
                
                <Accordion className="mt-4 mb-4">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                   <p className="text-left mb-0" style={{fontWeight:'bold'}}>Ver mi orden   <FontAwesomeIcon icon={faChevronDown} className="float-right mt-1" /></p>  
                 
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                   
                    <p style={{fontWeight:'bold'}}>Numero de Orden: {orderId} </p>
                    <hr/>
                    <p style={{fontWeight:'bold'}}> Datos de la orden: </p>                   
                    <p>{orderFinal.buyer.nombre} {orderFinal.buyer.apellido}</p>          
                    <p>{orderFinal.buyer.email}</p>
                    <hr/>
                    <p style={{fontWeight:'bold'}}> Productos solicitados: </p>                   
                    <ul>
                    {orderFinal.items.map(i =>
                          <li key={i.id}> {i.titulo} (<b>Cantidad:</b> {i.cantidad}) </li>  
                          )
                        }
                    </ul> 

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>               
                </Accordion>   
                  <Link to='/' style={{color:'#fff', paddingTop:'5px'}} className="btn btn-success btn-lg mx-auto mt-4 mb-4">¡Hacer otra compra!</Link>
                </Col> 

              : // SI EL CARRITO ESTA VACIO 
              
              <>              
              <p className="text-center mt-5 ">Tu carrito esta vacío</p>              
              <p className="text-center mt-5" style={{fontSize:'25px'}}>¿Porque no te pasas por nuestra portada para comprar algo?
              <br></br>
              <Link to='/productos/todos' style={{color:'#fff', paddingTop:'5px'}} className="btn btn-success btn-lg mx-auto mt-5">¡Comprar ahora!</Link>

              </p>
              </>
              )

              }

            </Col>     
            </Row>    
          </Container>
      </Container>
      );    
  }
  
  export default Carrito;

