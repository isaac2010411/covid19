import React from 'react';
import styled from 'styled-components';
import covidImg from '../../icons/covid.ico';
import NavBar from '../NavBar';
 
const CustomHeader = styled.header`
    padding:5px;
    height:7rem;
    img{
        height:40px;
        width:40px;
        margin-left:5px
    }
`
const CustomContainer =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:5rem;
`

const Header =()=>{
    return(
        <CustomHeader>
            <CustomContainer>
                <h1>Covid-19</h1>
                <img src={covidImg}  alt='covidimage'></img>
            </CustomContainer>
            <NavBar/>
        </CustomHeader>
    )
};



export default Header;