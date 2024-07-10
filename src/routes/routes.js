import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Admin } from '../containers/Admin'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import paths from '../utils/constants/paths'
import { Cart } from './../containers/Cart'
import PrivateRoute from './private_route'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/Cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
        <PrivateRoute component={Admin} path={paths.Order} isAdmin />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />
      </Switch>
    </Router>
  )
}
export default Routes
