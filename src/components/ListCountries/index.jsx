import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';



const CustomSection = styled.section`
    height:3rem;
    display:flex;
    justify-content:center;
    margin:5px;
    padding:5px;
    align-items:center;
`



const ListCountries =({countries}) =>{

    console.log(countries)
    return(
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>Paises</h1>
        {
            countries &&
            <>
                {
                    countries.map(((country,i)=>(
                        <CustomSection key={i} >
                            <Link to={`paises/${country.alpha2code}`}style={{fontSize:'1.4rem',textDecoration:'none'}} >{country.name}</Link>
                        </CustomSection>
                    )))
                }
            </>
        }
        </React.Fragment>
    )
};



export default ListCountries;