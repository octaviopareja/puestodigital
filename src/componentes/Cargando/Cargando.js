import React from 'react'
import spinner from '../../assets/img/spinner.svg';

/* BOOTSTRAP */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Cargando({titulo}) {
    return (
        <Row className="justify-content-md-center align-content-center h-100">
            <Col md={4} xs={12} className="text-center">
                <img alt="" src={spinner} className="align-top"/> 
                <h5 style={{fontSize:'18px', textAlign:'center', margin:'0px',}}>{titulo}</h5>
            </Col>
        </Row>  
    );
}

export default Cargando;