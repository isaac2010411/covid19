import {useState , useEffect } from 'react';





export const UseCountry =({code})=>{

    const [ info , setInfo ] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        async function getCountries (){
                fetch(`https://restcountries.eu/rest/v2/alpha/${code}`,{
                    method:'GET'
                })
                .then(data=>data.json())
                .catch(error=>error)
                .then(data=> setInfo(data))
        }
        if(isMounted){
            getCountries(code);
        }
        
        return(()=> isMounted=false )
    },[code])

    return info;

}