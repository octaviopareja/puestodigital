import React from 'react';
import {Switch, Route} from "react-router-dom";


/*COMPONENTE*/
import Contacto from '../Contacto/Contacto';
import Bienvenidos from '../Bienvenidos/Bienvenidos';
import Cart from '../Cart/Cart';
import ItemList from '../Item/ItemList/ItemList';
import ItemDetailContainer from '../Item/ItemDetailContainer/ItemDetailContainer';

/*BOOTSTRAP*/
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function MainContainer() {

  document.title = "Puesto Digital"

  /*

  const {categoria} = useParams();

  console.log('la categoria elegida es:'+categoria)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {     
    
    console.log('la categoria elegida es:'+categoria)
    
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
      
    }, []);

    */

      return (
    
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
                        
                          <ItemList/>
                       
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
      );
    
  }
  
  export default MainContainer;

