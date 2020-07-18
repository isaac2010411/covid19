import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Footer = ()=>{
    return(
        <CustomFooter>
            <hr/>
            <h5>Covid-19</h5>
            <Link to={'/countries'}>Countries</Link>
        </CustomFooter>
    )
}

const CustomFooter = styled.footer`
    height:7rem;
    display:flex;
    flex-direction:column;
    margin-top:19px;

`
export default Footer;