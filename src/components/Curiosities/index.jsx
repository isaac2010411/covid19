import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { UseCountry } from '../../hooks/useCountry';

import IsLoading from '../IsLoading';
import MapCountry from '../MapCountry';




const Curiosities =({code , latitud , longitud })=>{
    const info = UseCountry({code:code[2]});
    return(
        <Container fluid style={{marginTop:'30px'}}>
            {
                info
                ?
                <React.Fragment>
                    <h5 className='mb-5'>More about {`${info.name}`}</h5>
                    <Row className='d-flex'>
                        <Col md={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                            <p>
                                {
                                    `${info.name} tiene como lenguaje oficial el 
                                    ${info.languages.map((lenguaje)=>`${lenguaje.name}`)} , 
                                    su capital es ${info.capital}, abarca una superficie total de 
                                    ${info.area} km2 , La moneda que se utiliza es el ${info.currencies.map(currency=>`${currency.name}`)}`
                                }
                            </p>
                        </Col>
                        <Col md={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                            <figure style={{border: '1px #cccccc solid'}}>
                               <img src={info.flag} alt={'Flag'} style={{maxHeight:'200px'}} className='img-fluid'></img> 
                                <figcaption><h5 className='text-center'>{`Flag of ${info.name}`}</h5></figcaption>
                            </figure>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'30px', marginBottom:'30px', display:'block'}}>
                        <Col>
                                <h4>Geographic position</h4>
                        </Col>
                        <Col>
                            <MapCountry latitud={latitud} longitud={longitud}></MapCountry>
                        </Col>
                        
                    </Row>
                    
                </React.Fragment> 
                :
                <IsLoading/>
            }
        </Container>

    )
};



export default Curiosities;