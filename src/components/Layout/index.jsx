import React, { Fragment } from 'react';


import Header from '../Header';
import Footer from '../Footer';
const Layout = ({children})=>{
    return(
        <Fragment>
            <Header/>
                <hr style={{margin:'15px'}}/>
            {children}
            <Footer/>
        </Fragment>
    )
};



export default Layout;