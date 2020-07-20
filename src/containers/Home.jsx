import React, { useState } from 'react';
import  { UseTotal }  from '../hooks/useTotal';
import DataTemplate from '../components/DataTemplate';
import IsLoading from '../components/IsLoading';
import Tips from '../components/Tips';

import DateComponent from '../components/DateComponent';
import { Container } from 'react-bootstrap';



const Home =()=>{
    const [dataInDay , setDataInDay] = useState(null);
    const  data = UseTotal();
    console.log(dataInDay)
    return(
        <Container fluid>
            {
                ! data 
                ?
                <>
                    <IsLoading></IsLoading>
                </>
                :
                <React.Fragment>
                    <Tips/>
                {
                    data.map((info , i )=>(
                        <DataTemplate data={info} title='Cases in the world' key={i}/>
                    ))
                }
                </React.Fragment>
            }
            <div style={{backgroundColor:'#F4F2EF'}}>
                <DateComponent setDataInDay={setDataInDay} />
                {
                    dataInDay&&
                    <>
                    <div style={{display:'flex',justifyContent:'flex-end',padding:'20px',cursor:'pointer',alignItems:'end'}}>
                        <h6  onClick={()=>setDataInDay(null)}>x</h6> 
                    </div>
                        {
                            dataInDay.map((data,i)=>(
                            <DataTemplate data={data} title={`Cases in the worl day : ${data.date}`} key={i}/>
                            ))
                        }
                    </>
                }
        </div>
        </Container>
    )
}


export default Home;