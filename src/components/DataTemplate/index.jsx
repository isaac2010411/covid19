import React from 'react';
import { Col , Container , Row } from 'react-bootstrap'
import './style.css';


const DataTemplate =({data})=>{
    return(
        <Container fluid style={{marginTop:'20px'}}>
            <Row>
                <Col className='datatemplate_col' style={{backgroundColor:'yellow'}}>
                    <h5>Confirmados</h5>
                    <h5>{data.confirmed}</h5>
                </Col>
                <Col className='datatemplate_col'style={{backgroundColor:'green'}}>
                    <h5>Recuperados</h5>
                    <h5>{data.recovered}</h5>
                </Col>
            </Row>
            <Row>
                <Col className='datatemplate_col'style={{backgroundColor:'orange'}}>
                    <h5>Criticos</h5>
                    <h5>{data.critical}</h5>
                </Col>
                <Col className='datatemplate_col'style={{backgroundColor:'red'}}>
                    <h5>Muertos</h5>
                    <h5>{data.deaths}</h5>
                </Col>
            </Row>
    </Container>
    )
}



export default DataTemplate