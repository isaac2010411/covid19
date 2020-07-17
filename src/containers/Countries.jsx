import React, { useState } from 'react';
import ListCountries from '../components/ListCountries';
import { UseCountries } from '../hooks/useCountries';
import IsLoading from '../components/IsLoading';
import Seeker from '../components/Seeker';


const Countries =()=>{
    const [wonted , setWonted ] =  useState(null)
    const countries = UseCountries();
    
    return( 
        <>
            {
                countries
                ?
                <div style={{}}>
                    <Seeker 
                        countries ={ countries }
                        setWonted ={ setWonted }
                    />
                    <ListCountries 
                        countries={countries} 
                        wonted = {wonted} 
                    />
                </div>
                :
               <IsLoading></IsLoading>
            }
        </>
    )
}

export default Countries;
