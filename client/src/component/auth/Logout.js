import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/action/authAction';
import PropTyps from 'prop-types';

const Logout = ({ logout }) => {
  return (
    <Fragment>
      <NavLink onClick={logout} href="#">
        Logout
      </NavLink>
    </Fragment>
  );
}

Logout.propTypes = {
  logout: PropTyps.func.isRequired
}

export default connect(null, { logout })(Logout);
