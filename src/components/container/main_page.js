import React, {Component} from 'react';
import AddAcc from '../create_acc/create_acc'
import Login from '../login/login'

class Main extends Component {
  render() {
    return(
      <div>
        <div>
          <h3>Enter Username or E-mail</h3>
          <Login />
          <AddAcc />
        </div>
      </div>
    )
  }
}


export default Main;