import React, {useState} from 'react'
import {Link} from "react-router-dom";

import ItemCount from '../../Item/ItemCount/ItemCount';
import BotonComprar from './BotonComprar';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'




function ItemDetail({detalle}) {


     const [cantidadElegida, setcantidadElegida] = useState();  
     function onChange(cantidadElegida) {
        setcantidadElegida(cantidadElegida)  
       // console.log(cantidadElegida)     
     }


    return (
       
    <Col md={12}>
        <Breadcrumb>
            <Breadcrumb.Item ><Link to='/'>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={`/productos/${detalle.categoria}`} style={{textTransform:'capitalize'}}>{detalle.categoria}</Link></Breadcrumb.Item>
            <Breadcrumb.Item active><Link to={`/productos/categoria/${detalle.id}`}>{detalle.titulo}</Link></Breadcrumb.Item>
        </Breadcrumb>

        <Card className="m-0 align-items-stretch">
           
            <Card.Body>
                <Card.Title style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>{detalle.titulo}</Card.Title>
                <Card.Text style={{fontSize:'14px', textAlign:'center', fontWeight:'light', lineHeight:'18px'}}>{detalle.descripcion}</Card.Text>
               
                    
                    <div className="embed-responsive embed-responsive-16by9 p-5 bg-gray">
                        <iframe title={detalle.titulo} className="embed-responsive-item" src={detalle.video} allowFullScreen/>
                    </div>
            
             
                <h5 style={{fontSize:'38px', textAlign:'center', fontWeight:'bold', color:'green'}}>$ {detalle.precio}</h5>            
            </Card.Body>
            <Card.Footer>

            <Row className="justify-content-center">
                <Col md={4} xs={12}>
                    <ItemCount initial={1} min={0} max={detalle.stock} onAdd={1} id={detalle.id} titulo={detalle.titulo}  onChange={onChange} precio={detalle.precio}/> 
                </Col>
                <Col md={3} xs={12}>
                    <BotonComprar id={detalle.id} titulo={detalle.titulo} cantidad={cantidadElegida} precio={detalle.precio} />                   
                </Col>
            </Row>
           
            </Card.Footer>
        </Card>

    

    </Col>

    );
}

export default ItemDetail;

/*
<ItemCount initial="1" min="0" max={valores.stock} onAdd="1" id={valores.stock}/>
            {`${valores.id}`}
*/

