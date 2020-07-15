import React from 'react';
import  { UseTotal }  from '../hooks/useTotal';
import DataTemplate from '../components/DataTemplate';
import IsLoading from '../components/IsLoading';



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
                    {
                        data.map((info , i )=>(
                           <DataTemplate data={info} key={i}/>
                        ))
                    }
                    </React.Fragment>
            }
        </React.Fragment>
    )
}


export default Home;