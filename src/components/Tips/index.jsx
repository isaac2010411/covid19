import React from 'react';


//icons
import covidCasa from '../../icons/covidcasa.ico';
import covidDistancia from '../../icons/coviddistancia.ico';
import covidSintomas from '../../icons/covidsintomas.ico';
import covidTos from '../../icons/tos.ico';
import covidLavaManos from '../../icons/covidlavamanos.ico'
import { Jumbotron, Col, Row } from 'react-bootstrap';


const Tips=()=>{
    const tipList=[
        {
            id:1,
            tip:'Quedate en casa lo máximo posible',
            image:covidCasa
        },
        {
            id:2,
            tip:'Manten distancia social',
            image:covidDistancia
        },
        {
            id:3,
            tip:'Lavate las manos con frecuencia',
            image:covidLavaManos
        },
        {
            id:4,
            tip:'No tosas sobre tu mano',
            image:covidTos
        },
        {
            id:5,
            tip: 'Sintomas',
            image:covidSintomas
        },
    ]
    const tip = Math.random()*4;
    return(
        <section style={styleSection}>
            <Jumbotron style={{width:'96%' ,display:'flex', justifyContent:'center'}}>
            {
                <Row style={{display:'flex' ,alignItems:'center'}}>
                    <Col>
                        <h4>{tipList[Math.floor(tip)].tip}</h4>
                    </Col>
                    <Col >
                        <img src={tipList[Math.floor(tip)].image} className='img-fluid' alt={tipList[Math.floor(tip)].tip}/>
                    </Col>
                </Row>
            }
            </Jumbotron>
        </section>
        
    )
}

const styleSection = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'30px'
}
export default Tips