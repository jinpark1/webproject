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
import Support from './components/Forum/Support';
import Feedback from './components/Forum/Feedback';
import Software from './components/Forum/Software';
import Social from './components/Forum/Social';
import Security from './components/Forum/Security';
import Random from './components/Forum/Random';
import OS from './components/Forum/OS';
import Mobile from './components/Forum/Mobile';
import Hardware from './components/Forum/Hardware';
import General from './components/Forum/General';
import Code from './components/Forum/Code';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/forum' component={ Forum } />
        <Route path='/auth' component={ Auth } />
        <Route path='/trollbox' component={ Trollbox } />
        <Route path='/register' component={ Register } />
        <Route path='/register2' component={ Register2 } />
        <Route path='/register3' component={ Register3 } />
        <Route path='/register4' component={ Register4 } />
        <Route path='/forums/:id' component={ Post } />
        <Route path='/settings' component={ Setting } />
        <Route path='/profile' component={ Profile } />
        <Route path='/forum/support' component={ Support } />
        <Route path='/forum/feedback' component={ Feedback } />
        <Route path='/forum/software' component={ Software } />
        <Route path='/forum/social' component={ Social } />
        <Route path='/forum/security' component={ Security } />
        <Route path='/forum/random' component={ Random } />
        <Route path='/forum/os' component={ OS } />
        <Route path='/forum/mobile' component={ Mobile } />
        <Route path='/forum/hardware' component={ Hardware } />
        <Route path='/forum/general' component={ General } />
        <Route path='/forum/programming' component={ Code } />
    </Switch>
)