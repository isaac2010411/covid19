import React from 'react';
import ListCountries from '../components/ListCountries';
import { UseCountries } from '../hooks/useCountries';
import IsLoading from '../components/IsLoading';


const Countries =()=>{

    const countries = UseCountries();
    
    return( 
        <>
            {
                countries
                ?
                    <ListCountries countries={countries} ></ListCountries>
                :
               <IsLoading></IsLoading>
            }
        </>
    )
}


export default Countries;
