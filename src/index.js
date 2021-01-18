import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.css"
import "assets/scss/now-ui-dashboard.scss?v1.4.0"
import "assets/css/custom.css"

import Layout from "./layouts"
import Login from "./pages/Login"

import Loading from "./components/Loading"

import history from "./utils/history"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" render={(props) => <Layout {...props} />} />
      </Switch>
    </Router>
    <Loading />
  </Provider>,
  document.getElementById("root")
)
