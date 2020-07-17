import React from 'react';
import  { UseTotal }  from '../hooks/useTotal';
import DataTemplate from '../components/DataTemplate';
import IsLoading from '../components/IsLoading';
import Tips from '../components/Tips';



const Home =()=>{
    
    const  data = UseTotal();
    return(
        <React.Fragment>
            {
                ! data 
                ?
                <>
                    <IsLoading></IsLoading>
                </>
                :
                <React.Fragment>
                    <Tips></Tips>
                {
                    data.map((info , i )=>(
                        <DataTemplate data={info} title='Casos en el mundo' key={i}/>
                    ))
                }
                </React.Fragment>
            }
        </React.Fragment>
    )
}


export default Home;