import {useState , useEffect } from 'react';
import config from '../config';
var unirest = require('unirest')


export const UseTotal =()=>{
    const [ data , setData ] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        async function getData(){
            var req = unirest("GET", `https://covid-19-data.p.rapidapi.com/totals`);

            req.headers({
                "x-rapidapi-host": config.rapidapiHost,
                "x-rapidapi-key": config.rapidapiKey,
                "useQueryString": config.queryString
            })

            
            .then(data=>setData(data.body))
            .catch(err=>err)
        }
        if(isMounted){
          getData()  
        }
        return(()=>(isMounted = false))
    },[]);

    return data;
}