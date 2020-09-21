import React from 'react'
import { NavLink } from "react-router-dom";

import ItemCount from '../Item/ItemCount/ItemCount';

/*BOOTSTRAP*/
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function Item({imagen, titulo, descripcion, precio, stock, id, categoria,  onChange}) {

    

    return (
        <Col md={4} xs={12} className="mb-4 no-gutters d-flex align-items-stretch" key={id}>
            <Card className="m-0 align-items-stretch">
                <NavLink to={`/productos/${categoria}/${id}`} style={{display:'flex'}}><Card.Img src={imagen} style={{maxWidth:'75%', margin:'15px auto'}}/></NavLink>
                <Card.Body>
                    <Card.Title><h2 style={{fontSize:'18px', textAlign:'center', fontWeight:'bold'}}>{titulo}</h2></Card.Title>
                    <Card.Text style={{fontSize:'14px', textAlign:'center', fontWeight:'light', lineHeight:'18px'}}>
                    {descripcion}               
                    </Card.Text>
                    <h5 style={{fontSize:'25px', textAlign:'center', fontWeight:'bold', color:'red'}}>$ {precio}</h5>            
                </Card.Body>
                <Card.Footer> 
                <ItemCount key={id} initial={1} min={0} max={stock} onAdd={1} id={id} titulo={titulo} onChange={onChange} precio={precio} /> 
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Item;

/*
<ItemCount initial="1" min="0" max={valores.stock} onAdd="1" id={valores.stock}/>
            {`${valores.id}`}
*/

