import React from 'react';
import ListCountries from '../components/ListCountries';
import { useGetData } from '../hooks/useData';


const Countries =()=>{
    const countries = useGetData();
    return( 
        <>
            {
                countries
                ?
                    <ListCountries countries={ countries } ></ListCountries>
                :
                <>
                cargando
                </>
            }
        </>
    )
}


export default Countries;
