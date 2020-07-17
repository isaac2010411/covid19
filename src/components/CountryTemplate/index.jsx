import React from 'react';

import { Container } from 'react-bootstrap';
import DataTemplate from '../DataTemplate';
import Curiosities from '../Curiosities';

const CountryTemplate =({ data , code})=>{

    return(
        <React.Fragment>
        {
            data.map((mapDate , i) => (
                <Container fluid key={i} style={{marginTop:'35px'}}>
                    <h4 style={{textAlign:'center' ,marginBottom:'15px'}}>{ mapDate.country}</h4>
                        <Curiosities code={code} longitud={mapDate.longitude} latitud={mapDate.latitude}/>
                        <DataTemplate data= { mapDate } title ={`Casos confirmados en ${mapDate.country}`}/>
                </Container>
            ))
        }
        
        </React.Fragment>
    );
};


export default CountryTemplate;