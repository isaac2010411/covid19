import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Footer = ()=>{
    return(
        <Container style={{height:'7rem',display:'flex',flexDirection:'column', marginTop:'19px'}}>
            <h5>Covid-19</h5>
            <Link to={'/paises'}>Paises</Link>
        </Container>
    )
}
export default Footer;