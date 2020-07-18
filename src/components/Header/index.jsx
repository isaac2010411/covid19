import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import './style.css';
const CustomHeader = styled.header`
    padding:5px;
    height:8rem;
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
                <div className='header_img_container'>
                    <div className='header_img-img'></div>
                </div>
            </CustomContainer>
            <NavBar/>
        </CustomHeader>
    )
};



export default Header;