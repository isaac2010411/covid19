import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from '../components/Layout';


import Home from '../containers/Home';
import Country from '../containers/Country';
import Countries from '../containers/Countries';
import NotFoundPage from '../containers/NotFoundPage'

const App =()=> {
    return(
        <BrowserRouter> 
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/countries' component={ Countries }></Route>
                    <Route exact path='/countries/:id' component={Country}></Route>
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}



export default App