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
            tip:'Stay home',
            image:covidCasa
        },
        {
            id:2,
            tip:'Maintain at least 1 metre distance between yourself and others.',
            image:covidDistancia
        },
        {
            id:3,
            tip:'Clean your hands them with soap and water.',
            image:covidLavaManos
        },
        {
            id:4,
            tip:'Avoid touching eyes, nose and mouth.',
            image:covidTos
        },
        {
            id:5,
            tip: 'Maintain self-isolate even with minor symptoms such as cough, headache, mild fever,',
            image:covidSintomas
        },
    ]
    const tip = Math.random()*5;
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