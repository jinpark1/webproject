import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Auth from './components/Auth/Auth';
import Trollbox from './components/Trollbox/Trollbox';
import Register from './components/Auth/Register/Register';
import Register2 from './components/Auth/Register/Register2';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/forum' component={ Forum } />
        <Route path='/auth' component={ Auth } />
        <Route path='/trollbox' component={ Trollbox } />
        <Route path='/register' component={ Register} />
        <Route path='/register2' component={ Register2} />
    </Switch>
)