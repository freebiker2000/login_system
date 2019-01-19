import React, {Component} from 'react';
import AddAcc from '../create_acc/create_acc'
import Login from '../login/login'
import Menu from '../menu/menu'

class Main extends Component {
  render() {
    return(
      <div>
        <div>
          <Menu />
          <Login />
          <AddAcc />
        </div>
      </div>
    )
  }
}


export default Main;