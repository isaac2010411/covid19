import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const IsLoading =()=>{
  
    return(
        <Container fluid className='isLoading_container'>
            <div className='img-isLoading'></div>
        </Container>
    )
};



export default IsLoading;