import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Auth from './components/Auth/Auth';
import Trollbox from './components/Trollbox/Trollbox';
import Register from './components/Auth/Register/Register';
import Register2 from './components/Auth/Register/Register2';
import Register3 from './components/Auth/Register/Register3';
import Register4 from './components/Auth/Register/Register4';
import Post from './components/Forum/Post/Post';
import Setting from './components/Setting/Setting';
import Profile from './components/Profile/Profile';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/forum' component={ Forum } />
        <Route path='/auth' component={ Auth } />
        <Route path='/trollbox' component={ Trollbox } />
        <Route path='/register' component={ Register } />
        <Route path='/register2' component={ Register2 } />
        <Route path='/register3' component={ Register3 } />
        <Route path='/register4' component={ Register4 } />
        <Route path='/forums/:id' component={ Post } />
        <Route path='/settings' component={ Setting } />
        <Route path='/profile' component={ Profile } />
    </Switch>
)