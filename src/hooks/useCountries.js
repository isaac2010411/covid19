import {useState , useEffect } from 'react';





export const UseCountries =()=>{

    const [ info , setInfo ] = useState(null);

    useEffect(()=>{
        async function getCountries (){
                fetch(`https://restcountries.eu/rest/v2/all`,{
                    method:'GET'
                })
                .then(data=>data.json())
                .catch(error=>error)
                .then(data=> setInfo(data))
        }
        getCountries();
    },[])

    return info;

}