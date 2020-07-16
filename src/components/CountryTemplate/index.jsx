import React from 'react';

import { Container } from 'react-bootstrap';
import DataTemplate from '../DataTemplate';
import Curiosities from '../Curiosities';

import MapCountry from '../MapCountry';

const CountryTemplate =({data , code})=>{
console.log(data)
    return(
        <React.Fragment>
        {
            data.map((mapDate , i) => (
                <Container fluid key={i} style={{marginTop:'15px'}}>
                    <h4 style={{textAlign:'center' ,marginBottom:'15px'}}>{ mapDate.country}</h4>
                        <DataTemplate data={ mapDate }/>
                    <MapCountry longitud={mapDate.longitude} latitud={mapDate.latitude} ></MapCountry>
                </Container>
            ))
        }
        <Curiosities code={code}/>
        </React.Fragment>
    );
};


export default CountryTemplate;