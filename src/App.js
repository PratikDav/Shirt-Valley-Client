import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Admin from './Component/Admin/Admin';
import Checkout from './Component/Checkout/Checkout';
import Order from './Component/Order/Order';
import ViewItem from './Component/ViewItem/ViewItem';
import ManageProduct from './Component/ManageProduct/ManageProduct';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =  useState({});
  const [email,setEmail] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser],[email, setEmail]} className="App">
      <Router>
      <Header/>
        <hr/><h2 style={{textAlign: 'center'}}>Pick Your Favourite Shirt</h2><hr/>
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout/>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order/>
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            
            
          </Switch>
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;
