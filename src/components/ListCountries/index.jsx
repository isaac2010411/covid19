import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const ListCountries =({countries , wonted}) =>{
    return(
        <section style={{zIndex:'0'}}>  
        {
            countries &&
                wonted
                ?
                <div style={{marginTop:'20px'}}>
                    <div className='listcountries_container-grid'>
                        {
            
                            wonted.map(((data , i)=>(
                                <Link to={`paises/${data.alpha3Code}`} key={i} className='listcountries_item-grid'>
                                    <img src={data.flag} height='auto'width='100px' alt={data.name}/>
                                    <h6 >{data.name}</h6>
                                </Link>
                            )))
                        }
                    </div> 
                </div>
                :
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
        </section>
    )
};


export default ListCountries;