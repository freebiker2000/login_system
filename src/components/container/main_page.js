import React, {Component} from 'react';
import AddAcc from '../create_acc/create_acc'
import Axios from 'axios';

const BASE_URL = 'http://localhost:3456/'

class Main extends Component {

  state = {
    users: [{
      name: '',
      password: '',
      id: ''
    }]
  }

  async getAcc() {
    let {data} = await Axios.get(`${BASE_URL}users`)
    this.setState({users: data})
  }

  componentDidMount() {
    this.getAcc();
  }

// addAccToState = (name, pass) => {
//   console.log(`this log should end in ${pass}`)
//   this.setState({
//     users: [...this.state.users, { 
//     name: this.name.value,
//     password: this.pass.value,
//     id: this.state.users.length
//     }]
//   })
// }

// Render function to show on screen binded with the div bellow
// renderAcc = () => {
//   return this
//     .state
//     .users
//     .map((account, key) => 
//       <p key={key}>{account.name}</p>)
// }

  render() {
    return(
      <div>
        <div>
          <h3>Enter Username or E-mail</h3>
          {/* <div>{this.renderAcc()}</div> */}
          <AddAcc />
        </div>
      </div>
    )
  }
}


export default Main;