import React from 'react';

import { Container } from 'react-bootstrap';
import DataTemplate from '../DataTemplate';
import Curiosities from '../Curiosities';



const CountryTemplate =({data , code})=>{
    return(
        <React.Fragment>
        {
            data.map((mapDate , i) => (
                <Container fluid key={i} style={{marginTop:'15px'}}>
                    <h4 style={{textAlign:'center' ,marginBottom:'15px'}}>{ mapDate.country}</h4>
                        <DataTemplate data={ mapDate }/>
                </Container>
            ))
        }
        <Curiosities code={code}/>
        </React.Fragment>
    );
};


export default CountryTemplate;