import React from 'react';
import { Col , Container , Row } from 'react-bootstrap'
import './style.css';


const DataTemplate =({data , title})=>{
    
    return(
        <Container fluid style={{marginTop:'70px', marginBottom:'50px'}}>
            {
                title &&
                <h4>{title}</h4>
            }
            <Row style={{marginTop:'20px'}}>
                <Col className='datatemplate_col' style={{backgroundColor:'#F7E552'}}>
                    <h5>Confirmed</h5>
                    <h5>{new Intl.NumberFormat().format(data.confirmed)}</h5>
                </Col>
                <Col className='datatemplate_col'style={{backgroundColor:'#99F038'}}>
                    <h5>Recovered</h5>
                    <h5>{new Intl.NumberFormat().format(data.recovered)}</h5>
                </Col>
            </Row>
            <Row>
                <Col className='datatemplate_col'style={{backgroundColor:'#FFB32E '}}>
                    <h5>Critical</h5>
                    <h5>{new Intl.NumberFormat().format(data.critical)}</h5>
                </Col>
                <Col className='datatemplate_col'style={{backgroundColor:'#FF735F '}}>
                    <h5>Deaths</h5>
                    <h5>{new Intl.NumberFormat().format(data.deaths)}</h5>
                </Col>
            </Row>
    </Container>
    )
}



export default DataTemplate