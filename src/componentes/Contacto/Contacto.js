import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form'

import Cargando from '../Cargando/Cargando';


function Contacto() {

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(null);


  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    celular:'',
    consulta: ''
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
   
    event.preventDefault()

    var p1 = new Promise(function(resolve, reject) {
      resolve('Success!');
      // or
      // reject ("Error!");
    });

    
    p1.then(() => {
 
      setLoading(true); //muestro el loading      
    }).catch(err => {
      setEnviado(false); //error, no enviado
    }).finally(() => {       
      setTimeout(() => {      
      setLoading(false); //saco loading  
      setEnviado(true); //pongo true en el enviado 
      }, 2000);    
    }); 

   }
   


   return (
      <Container fluid className="bg-light-gray shadow border">
        <Container>
          <Row> 
            <Col md={12} className="pt-4 pb-4 h-100">
              <h1>Contáctanos</h1>
              <hr></hr>

              { 
              // Si EL ENVIADO NO EXISTE
              ((enviado===false || enviado===null)) ? (
              <>

              { 
                  // SI EL LOADING ES VERDADERO MUESTRO ESTO
              loading  ? 
               <Cargando titulo="Enviando datos..."/>
              : // SINOO MUESTRO LA TABLA CON ELC ARRITO   

              <Form onSubmit={enviarDatos}>              
                <Form.Row>
                  <Form.Group  as={Col} controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Tu nombre" onChange={handleInputChange}/>
                  </Form.Group>  
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com" onChange={handleInputChange}/>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group  as={Col} controlId="telefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control placeholder="0351-123456" />
                </Form.Group>
                <Form.Group  as={Col} controlId="celular">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control placeholder="0351-123456" onChange={handleInputChange}/>
                </Form.Group>
                </Form.Row>     

                <Form.Row>
                  <Form.Group as={Col} controlId="consulta">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Escriba aquí su consulta" onChange={handleInputChange}/>
                  </Form.Group>
                </Form.Row>             

                <Button variant="success" type="submit"  disabled={datos.nombre==='' ||  datos.email==='' ||   datos.consulta==='' ||  datos.celular===''}>
                  Enviar mi consulta
                </Button>
              </Form> 

              } 

              </>
              )  

              : // SI ENVIADO ES TRUE 


              <>          
              <p className="text-center mt-5" style={{fontSize:'25px'}}>Consulta enviada correctamente
              <br></br>
              <Link to='/productos/todos' style={{color:'#fff', paddingTop:'5px'}} className="btn btn-success btn-lg mx-auto mt-5">Continuar</Link>
              </p>
              </>

              }           
            </Col>     
            </Row>    
          </Container>
      </Container>
      );    
  }
  
  export default Contacto;

