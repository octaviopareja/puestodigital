import React from 'react';

import MainContainer from './componentes/MainContainer/MainContainer';
import NavBar from './componentes/NavBar/NavBar';
import Greeting from './componentes/MainContainer/Greeting/Greeting';
import SideBar from './componentes/SideBar/SideBar';

import { UserProvider } from './context/cartContext';

import { BrowserRouter} from "react-router-dom";

/*BOOTSTRAP*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default function App() {


  
  return (

    <UserProvider>  
     <BrowserRouter>
     
          <NavBar/>  

          <Greeting name="Octavio"/>  +

          <Container className="mt-5 d-flex align-items-stretch">
                <Row>
                  
                 <SideBar className=" d-flex align-items-stretch"/> 

                 <MainContainer/>
         
               </Row>
          </Container>

      </BrowserRouter>   
    </UserProvider>

  );
}


