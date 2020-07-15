import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { UseCountry } from '../../hooks/useCountry';
import IsLoading from '../IsLoading';




const Curiosities =({code})=>{
    const info = UseCountry({code:code[2]});
    console.log(info)
    const handleChange =()=>{
        var element = document.getElementById("also_data");
        element.classList.toggle('d-none');
   }
    return(
        <Container style={{marginTop:'20px'}}>
            <Row onClick={()=>handleChange()}>
                <h2 style={{marginLeft:'10%'}}>Sabias que..</h2>
            </Row>
            <Container id='also_data' className='d-none'>
                {
                    info
                    ?
                    <>
                       <p>{`${info.name} tiene como lenguaje oficial el ${info.languages.map((lenguaje)=>`${lenguaje.name}`)} , su capital es ${info.capital}, abarca un area de ${info.area} km2 , La moneda que se utiliza es el ${info.currencies.map(currency=>`${currency.name}`)}`}</p>
                       <h2>Su bandera</h2>
                       <img src={info.flag} alt={'Bandera'} className='img-fluid'></img>
                    </>
                    :
                    <IsLoading></IsLoading>
                }
            </Container>
        </Container>
    )
};



export default Curiosities;