import {useState , useEffect } from 'react';




export const UsePaises =()=>{

    const [ info , setInfo ] = useState(null);

    useEffect(()=>{
        async function getPaises (){
                fetch('https://restcountries.eu/rest/v2/all',{
                    method:'GET'
                })
                .then(data=>data.json())
                .catch(error=>error)
                .then(data=> setInfo(data))
        }
        getPaises();
    },[])

    return info;

}