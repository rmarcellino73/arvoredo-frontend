import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';

import Users from '../pages/Users';
import User from '../pages/User';
import Tree from '../pages/Tree';
import ViewTree from '../pages/ViewTree';

const Routes = () => (
    <Switch>      
      <Route path="/" exact component={Login} />
      <Route path="/users" component={Users} isPrivate/>
      <Route path="/edit/:id" component={User} isPrivate/>
      <Route path="/trees/:id" component={Tree} isPrivate/>
      <Route path="/view/:id" component={ViewTree} isPrivate/>
    </Switch>
);

export default Routes;