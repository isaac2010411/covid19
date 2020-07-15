import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';



const CustomHeader = styled.nav`
    display:flex;
    height:2rem;
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