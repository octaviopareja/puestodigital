import React from 'react';
import {Link, useParams} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

/* Componentes */
import Logo from '../Logo/Logo'
import CartIcon from './CartIcon'

/* CSS */
import './NavBar.css';


function NavBar() {
  
  const {categoria} = useParams();
  console.log({categoria})

      return (
       
          <Container fluid className="bg-dark shadow sticky-top">
            <Container>
              <Row>
              
                <Col md={12} >
                  <Navbar bg="dark" variant="dark" expand="lg">              

                    <Link to='/'><Navbar.Brand> <Logo/> </Navbar.Brand></Link> 

                      <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                          <Link to='/' style={{color:'#fff', paddingTop:'5px'}}>Inicio</Link>
                          <p className="divider d-none d-lg-block">|</p>
                          <NavDropdown title="Categorias" id="basic-nav-dropdown" style={{color:'#fff', paddingTop:'0px'}}>
                          <ul className="list-unstyled">
                            <li><Link to='/productos/todos/'>Todos</Link></li>
                            <li><Link to='/productos/ssd/'>Discos SSD</Link></li>
                            <li><Link to='/productos/motherboards/'>Motherboards</Link></li>
                            <li><Link to='/productos/procesadores/'>Procesadores</Link></li>
                            <li><Link to='/productos/vga/'>Placas de Video</Link></li> 
                          </ul>
                          </NavDropdown>       
                          <p className="divider d-none d-lg-block">|</p>
                          <Link to='/productos/todos/'  style={{color:'#fff', paddingTop:'5px'}}>Productos</Link>                                     
                          <p className="divider d-none d-lg-block">|</p>
                          <Link to='/contacto/'style={{color:'#fff', paddingTop:'5px'}}>Contacto</Link>                       
                                      
                        </Nav>

                        <CartIcon/>
                        
                      </Navbar.Collapse>

                    

                  </Navbar>

                </Col>     
                </Row>    
              </Container>
          </Container>
     
      );
    
  }
  
  export default NavBar;

