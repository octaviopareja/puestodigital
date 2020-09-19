import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";


/*COMPONENTE*/
import Greeting from './Greeting/Greeting';
import Contacto from '../Contacto/Contacto';
import Bienvenidos from '../Bienvenidos/Bienvenidos';
import Cart from '../Cart/Cart';
import ItemList from '../Item/ItemList/ItemList';
import ItemDetailContainer from '../Item/ItemDetailContainer/ItemDetailContainer';
import SideBar from '../SideBar/SideBar';
import Cargando from '../Cargando/Cargando';
import NavBar from '../NavBar/NavBar';

import {getFirestore} from '../../firebase'

/*BOOTSTRAP*/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function MainContainer(gretting) {

  document.title = "Puesto Digital"

  /*
    useEffect(() => {    
    // Actualiza el título del documento usando la Browser API    
    document.title = `Puesto Digital`;  
    });
  */
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {   
    
    const db = getFirestore();
    const products= db.collection('items');  

    products.get().then((querySnapshot) => {    
      setLoading(false); // Set state -> Render
      setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}))); // Set state -> Render     
    });

      
    }, []);

   // console.log(products)



      return (
      <>  
     
        <BrowserRouter>
          
            <NavBar/>
  
          <Greeting name="Octavio"/>       

              <Container className="mt-5 d-flex align-items-stretch">
                <Row>

                  <Col md={3} xs={12} className=" d-flex align-items-stretch">       
                   
                      <SideBar className=" d-flex align-items-stretch"/>     
                 
                  </Col>


                  <Col md={9} xs={12}>

                    <Switch>

                      <Route  path="/productos/:categoria/:id"> 
                        <Row>
                          <Col md={12} className="bg-silver shadow p-4">              
                            <ItemDetailContainer/>                                    
                          </Col>
                        </Row>
                      </Route>

                      <Route  path="/productos/:categoria">
                          { loading  ? 
                                      <Cargando titulo="Cargando..."/>
                                    : <ItemList products={products}/>
                          }
                      </Route>

                      <Route exact  path="/">
                        <Bienvenidos/>
                      </Route>                    

                      <Route exact  path="/contacto/">
                        <Contacto/>
                      </Route>

                      <Route exact  path="/cart/">
                        <Cart/>
                      </Route>

                    </Switch>  

                  </Col>  


                </Row>
              </Container>

          </BrowserRouter>        

      </>   
      );
    
  }
  
  export default MainContainer;

