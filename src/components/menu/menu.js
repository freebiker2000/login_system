import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
  
function Menu() {
  return (
    <Router>
      <div className="menu">
      
        <MenuLink to="/signup" label="SIGN UP" />
        <MenuLink active={true} to="/" label="LOG IN" />

        <Route exact path="/" component={LOG_IN} />
        <Route path="/signup" component={SIGN_UP} />

      </div>
    </Router>
  )
}

function MenuLink({ label, to, active }) {
  return (
    <Route
      path={to}
      exact={active}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          <Link to={to}>{label}></Link>
        </div>
      )}
    />
  )
}

function LOG_IN() {
  return(
    <div>
      <h3>LOG-IN</h3>
    </div>
  )
}

function SIGN_UP() {
  return(
    <div>
      <h3>SIGN UP</h3>
    </div>
  )
}


export default Menu