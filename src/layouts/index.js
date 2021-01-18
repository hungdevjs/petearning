import React from "react"
import PerfectScrollbar from "perfect-scrollbar"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"

import DemoNavbar from "components/DemoNavbar"
import Footer from "components/Footer"
import Sidebar from "components/Sidebar"
import FixedPlugin from "components/FixedPlugin"

import routes from "routes.js"
import history from "../utils/history"
import { getAccessToken } from "../utils/common"
import { getInfo } from "../commons/action"

var ps

class Layout extends React.Component {
  state = {
    backgroundColor: "yellow",
  }
  mainPanel = React.createRef()
  async componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current)
      document.body.classList.toggle("perfect-scrollbar-on")
    }

    const token = getAccessToken()
    if (!token) {
      history.push("/login")
    } else {
      await this.props.getInfo()
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy()
      document.body.classList.toggle("perfect-scrollbar-on")
    }
  }

  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0
      document.scrollingElement.scrollTop = 0
      this.mainPanel.current.scrollTop = 0
    }
  }

  handleColorClick = (color) => {
    this.setState({ backgroundColor: color })
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  exact
                  component={prop.component}
                  key={key}
                />
              )
            })}
            <Route from="*" component={() => <h1>404</h1>} />
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getInfo
}

export default connect(null, mapDispatchToProps)(Layout)
