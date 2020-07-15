import React from 'react';
import styled from 'styled-components';
import covidImg from '../../icons/covid.ico';

const CustomHeader = styled.header`
    display:flex;
    padding:5px;
    justify-content:center;
    align-items:center;
    heigth:3rem;
    img{
        height:40px;
        width:40px;
        margin-left:5px
    }
`
const Header =()=>{
    return(
        <CustomHeader>
            <h1>Covid-19</h1>
            <img src={covidImg}  alt='covidimage'></img>
        </CustomHeader>
    )
};



export default Header;