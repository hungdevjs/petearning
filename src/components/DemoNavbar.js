import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap"

class Header extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    color: "transparent",
  }
  sidebarToggle = React.createRef()
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      })
    } else {
      this.setState({
        color: "white",
      })
    }
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  dropdownToggle = (e) => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white",
      })
    } else {
      this.setState({
        color: "transparent",
      })
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this))
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open")
      this.sidebarToggle.current.classList.toggle("toggled")
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={this.state.color}
        expand="lg"
        className={"navbar-absolute fixed-top " +
          (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="now-ui-icons users_single-02" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="cursor-pointer">Log out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header
