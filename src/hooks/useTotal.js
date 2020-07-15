import {useState , useEffect } from 'react';
var unirest = require('unirest')


export const UseTotal =()=>{
    const [ data , setData ] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        async function getData(){
            var req = unirest("GET", `${process.env.REACT_APP_HOST_COV}totals`);
        
            req.headers({
                "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY ,
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