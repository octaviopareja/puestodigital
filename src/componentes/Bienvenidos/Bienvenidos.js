import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Bievenidos() {


   return (
      <Container fluid className="bg-light-gray shadow border">
        <Container>
          <Row> 
            <Col md={12} className="pt-4 pb-4 h-100 text-center">
            <h1 className="text-center">Bienvenidos a nuestra tienda</h1>
            <h5 className="text-center">Elige una categoría para empezar a navegar</h5>
            <img alt="" src="https://image.freepik.com/free-vector/yes-we-are-open-store_1056-1043.jpg" style={{width:'50%', margin:'30px 0 30px 0'}} className="d-inline-block align-top"/>    
            </Col>     
            </Row>    
          </Container>
      </Container>
      );    
  }
  
  export default Bievenidos;

