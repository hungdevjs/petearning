import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Switch } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "assets/scss/now-ui-dashboard.scss?v1.4.0"
import "assets/css/custom.css"

import Layout from "layouts"
import Login from "pages/Login"

import history from "./utils/history"

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" render={(props) => <Layout {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
)
