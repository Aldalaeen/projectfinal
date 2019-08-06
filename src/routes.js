import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import the components
import Main from './components/main';
import item from './components/item';
import AddItem from './components/additem';
import Login from './components/Login';
import Signup from './components/logoutin';
import EditHome from './components/EditHome';
import updateDelete from './components/updateDelete';
const Routes = () => (

  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/additem' component={AddItem} />
    <Route exact path='/item/:id' component={item} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/logoutin' component={Signup} />
    <Route exact path='/EditHome' component={EditHome} />
    <Route exact path='/updateDelete/:id' component={updateDelete} />
  </Switch>

)

export default Routes
