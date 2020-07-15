import React, { Fragment } from 'react';


import Header from '../Header';
import NavBar from '../NavBar';


const Layout = ({children})=>{
    return(
        <Fragment>
            <Header/>
            <NavBar/>
            {children}
        </Fragment>
    )
};



export default Layout;