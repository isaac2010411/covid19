import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const ListCountries =({countries}) =>{

    return(
        <React.Fragment>
            <h4 style={{textAlign:'center'}}>Paises</h4>
        {
            countries &&
            <>
                {
                    countries.map(((country,i)=>(
                        <Link to={`paises/${country.alpha3Code}`} key={i}>
                                <ListCountriesWhiteFlag name={country.name} flag={country.flag}/>
                        </Link>
                    )))
                }
            </>
        }
        </React.Fragment>
    )
};


const ListCountriesWhiteFlag = ({name , flag})=>(
    <Container style={{height:'4rem', margin:'5px' , padding:'3px'}}>
        <div style={{marginLeft:'10%', display:'flex' , alignItems:'center'}}>
            <img src={flag} height='28px' width='28px'  alt={name}/>
            <h6 style={{marginTop:'5px',marginLeft:'10px'}}>{name}</h6>
        </div>
        
    </Container>
)

export default ListCountries;