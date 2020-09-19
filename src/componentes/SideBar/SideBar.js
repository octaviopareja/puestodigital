import React from 'react';
import { Link, useParams} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

/* CSS */
import './SideBar.css';


function SideBar() {

  const {categoria} = useParams();
 console.log(categoria)

   return (
      <Container fluid className="bg-light-gray shadow border">
        <Container>
          <Row> 
            <Col md={12} className="pt-4 pb-4 h-100">
              <h5 className="text-center">Categorías</h5>
              <hr></hr>             
              <Link className="LinkBotonera" to='/productos/todos/'><Button variant={`secondary ${categoria==='todos' ? 'active': ''}`} size="xs" block name="todos" >Todos</Button></Link>
              <Link className="LinkBotonera" to='/productos/ssd/'><Button variant={`secondary ${categoria==='ssd'? 'active' : ''}`} size="xs" block name="ssd" >Discos SSD</Button></Link>
              <Link className="LinkBotonera" to='/productos/motherboards/'><Button variant={`secondary ${categoria==='motherboards'? 'active' : ''}`} size="xs" block name="motherboards" >Motherboards</Button></Link>
              <Link className="LinkBotonera" to='/productos/procesadores/'><Button variant={`secondary ${categoria==='procesadores'? 'active' : ''}`} size="xs" block name="procesadores"  >Procesadores</Button></Link>
              <Link className="LinkBotonera" to='/productos/vga/'><Button variant={`secondary ${categoria==='vga'? 'active' : ''}`} size="xs" block name="vga"  >Placas de Video</Button></Link>              
            </Col>     
            </Row>    
          </Container>
      </Container>
      );    
  }
  
  export default SideBar;

