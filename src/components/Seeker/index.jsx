import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Seeker =({countries , setWonted})=>{
    const listCountry = countries.map((data)=>({name:data.name , flag:data.flag , alpha3Code :data.alpha3Code}))

        function getData(){
            let data = document.getElementsByName('buscador')[0].value;
            let paises = listCountry.filter( dataList => dataList.name.includes(data))
            setWonted(paises)
        }
     
    return(
        <>
            <Container style={{ marginTop:'25px',display:'flex',justifyContent:'center'}}>
                <Row>
                    <Col>
                        <label htmlFor=""></label>
                        <input type='text' onChange={getData} name='buscador'></input>
                        <button>Buscar</button>
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}


export default Seeker;