import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';

const AppNavbar = ({ auth }) => {
  console.log(auth)
  const [ navExpand, toggle ] = useState(false)
  const { isAuthenticated, user } = auth;

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{ user ? `Welcome ${user.name}` : ""}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout/>
      </NavItem>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal/>
      </NavItem>
    
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  )
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={() => toggle(navExpand ? false : true)} />
          <Collapse isOpen={navExpand} navbar >
            <Nav className="ml-auto" navbar >
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

AppNavbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.authReducer
})

export default connect(mapStateToProps, null)(AppNavbar);