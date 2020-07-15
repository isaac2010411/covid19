import React from 'react';
import  { UseTotal }  from '../hooks/useTotal';
import styled from 'styled-components';



const CustomContainer = styled.div`
    height:73vh;
    margin:0px 5px 0px 5px;
    padding:5px;
    margin-top:3px;
`
const CustomHomeSection = styled.section`
    height:7rem;
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    h4{
        text-align:center;
    }
`



const Home =()=>{
    
    const  data = UseTotal();
    console.log(data)
    return(
        <React.Fragment>
            {
                ! data 
                    ?
                    <>
                        <h1>Cargando</h1>
                    </>
                    :
                    <React.Fragment>
                    {
                        data.map((info , i )=>(
                            <CustomContainer key={i} >
                                    <div style={{width:'100%', display:'flex' }}>
                                        <CustomHomeSection>
                                            <h4> confirmados <br/> {info.confirmed}</h4>
                                        </CustomHomeSection>
                                        <CustomHomeSection>
                                            <h4> criticos <br/> {info.critical}</h4>
                                        </CustomHomeSection>
                                        </div>
                                    <div style={{width:'100%', display:'flex' }}>
                                        <CustomHomeSection>
                                            <h4>muertos <br/> {info.deaths}</h4>
                                        </CustomHomeSection>
                                        <CustomHomeSection>
                                            <h4>recuperados <br/>  {info.recovered}</h4>
                                        </CustomHomeSection>
                                    </div>
                                <div>
                                    <h4>Proxima acualizacion {info.lastUpdate}</h4>  
                                </div>
                                
                                
                                
                                
                            </CustomContainer>
                        ))
                    }
                    </React.Fragment>
            }
            
        </React.Fragment>
    )
}


export default Home;