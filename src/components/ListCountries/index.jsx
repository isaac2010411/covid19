import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const ListCountries =({countries}) =>{

    return(
        <React.Fragment>  
        {
            countries &&
            <div style={{marginTop:'20px'}}>
             <h4 style={{textAlign:'center'}}>Total de paises</h4>
                <div className='listcountries_container-grid'>
                    {
                        countries.map(((country,i)=>(
                            <Link to={`paises/${country.alpha3Code}`} key={i} className='listcountries_item-grid'>
                                <img src={country.flag} height='auto'width='100px' alt={country.name}/>
                                <h6 >{country.name}</h6>
                            </Link>
                        )))
                    }
                </div>
            </div>
        }
        </React.Fragment>
    )
};


export default ListCountries;