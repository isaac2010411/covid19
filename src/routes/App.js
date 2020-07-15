import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from '../components/Layout';


import Home from '../containers/Home';
import Country from '../containers/Country';
import Countries from '../containers/Countries';

const App =()=> {
    return(
        <BrowserRouter> 
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/paises' component={ Countries }></Route>
                    <Route exact path='/paises/:id' component={Country}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}



export default App