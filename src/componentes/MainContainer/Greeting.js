import React from 'react';

/*BOOTSTRAP*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Greeting(gretting) {

      
      return (
      <Container fluid className="bg-info">
        <Container>
          <Row >
            <Col md={12} className="pt-2 text-center" >
              <p style={{color:'#fff', fontSize:'20px'}}>¡Bienvenido <b>{gretting.name}</b>, ya puedes comprar en nuestra tienda!</p>

            </Col>     
            </Row>             
          </Container>         
      </Container>  
      );
    
  }
  
  export default  Greeting;

