import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Row, Col, Container } from 'react-bootstrap';


const ListCountries =({countries , wonted}) =>{
    return(
        <section>  
        {
            countries &&
                wonted
                ?
                <div style={{marginTop:'20px'}}>
                    <h5 style={{textAlign:'center'}}>Countries list afected</h5>
                    <div className='listcountries_container-grid'>
                        {
            
                            wonted.map(((data , i)=>(
                                <ListItem item = {data} key={i}/>
                            )))
                        }
                    </div> 
                </div>
                :
                <div style={{marginTop:'20px'}}>
                    <h5 style={{textAlign:'center'}}>Countries list afected</h5>
                    <div className='listcountries_container-grid'>
                        {
                            countries.map(((country,i)=>(
                              <ListItem item = {country} key={i}/>
                            )))
                        }
                    </div>
                </div>
        
        }
        </section>
    )
};



const ListItem =({ item })=>{
    return(
        <Link to={`countries/${item.alpha3Code}`}>
            <hr style={{margin:'20px'}}/>
            <Container>
                <Row style={{display:'flex' ,marginTop:'10px'}}>
                    <Col >
                        <img src={item.flag}style={{float:'right'}} width='150px' alt={item.name}></img>
                    </Col>
                    <Col style={{marginLeft:'-15px'}} >
                        <h6>Country</h6>
                        <p>{item.name}</p>
                    </Col>
                </Row>
            </Container>
            <hr style={{margin:'20px'}}/>
        </Link>
    )
}


export default ListCountries;