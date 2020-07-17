import {useState , useEffect } from 'react';
var unirest = require('unirest')


export const useGetData =()=>{
    const [ data , setData ] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        async function getData(){
            var req = unirest("GET", `https://covid-19-data.p.rapidapi.com/help/countries`);

            req.headers({
                "x-rapidapi-host": 'covid-19-data.p.rapidapi.com',
                "x-rapidapi-key": 'd9740b60ebmshc60a112f10d9441p14501bjsn3e0facebbf9a' ,
                "useQueryString": true,
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