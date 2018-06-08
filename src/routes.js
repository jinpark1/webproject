import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Auth from './components/Auth/Auth';
import Store from './components/Store/Store';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/forum' component={ Forum } />
        <Route path='/auth' component={ Auth } />
        <Route path='/store' component={ Store } />
    </Switch>
)