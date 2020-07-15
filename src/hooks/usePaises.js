import {useState , useEffect } from 'react';




export const UsePaises =({name})=>{
    

    const [ info , setInfo ] = useState(null);

    useEffect(()=>{
        async function getPaises (name){
                fetch(`https://restcountries.eu/rest/v2/name/${name}`,{
                    method:'GET'
                })
                .then(data=>data.json())
                .catch(error=>error)
                .then(data=> setInfo(data))
        }
        getPaises(name);
    },[name])

    return info;

}