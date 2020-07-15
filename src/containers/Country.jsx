import React from 'react';
import { useGetDataID } from '../hooks/useDataID';
import CountryTemplate from '../components/CountryTemplate';
import IsLoading from '../components/IsLoading';

const Country =(prop)=>{

    const code = prop.location.pathname.split('/');
    const data = useGetDataID({name:code[2]});
    
    return(
        <>
            {
                data 
                ?
                    <CountryTemplate data={data} code={code}/>
                :
                
                    <IsLoading/>
            }
        </>
    )
}



export default Country;