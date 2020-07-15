import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';



const CustomHeader = styled.nav`
    background-color:;
    display:flex;
    height:2rem;
    border-top:solid black 0.3px;
    border-radius:10px;
    margin:3px;
    aling-items:center;
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:50%;
        a{
            text-decoration:none;
        }
    }
    

`

const NavBar =()=>{
    return(
        <CustomHeader>
            <div>
                <Link to='/'>
                    Home
                </Link>
            </div>
            <div><Link to='/paises'>
                Paises
            </Link>
            </div>
        </CustomHeader>
    )
}


export default NavBar;