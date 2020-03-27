import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon/index';
import Register from './pages/register/index'
import Profile from './pages/profile/index'
import NewIncident from './pages/NewIncident/index'



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon}/>
                <Route path='/register' component={Register}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/incidents/new' component={NewIncident}/>

            </Switch>
    
        </BrowserRouter>
    );
}