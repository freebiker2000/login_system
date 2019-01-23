import React, {Component} from 'react';
import Axios from 'axios';
import { BASE_URL } from '../constant/constant';
// import Input from '../input/input'

class Login extends Component {
  constructor(props){
    super(props)
    this.input = null;
    this.getAcc = this.getAcc.bind(this)
  }
  async getAcc() {
    try {
      await Axios
      .get(`${BASE_URL}users`,
        {
          name: this.nameInput.value,
          password: this.passInput.value
        }
      )
      .then(
        function checkAcc(response) {
          response.data.some(obj => {
            if(obj.name !== this.nameInput.value)
            return alert('ii bun')
          })
        }
      )
    } catch(e){
    }
  }
    
    render() {
      return(
        <div>
          <h3>Enter Username</h3>
          <input ref={name => this.nameInput = name} type="text"/>
          <h3>Enter Password</h3>
          <input ref={pass => this.passInput = pass} type="text"/>
          <button onClick={this.getAcc} type="submit"> LOG IN </button>
        </div>
        )
      }
    }
    
export default Login;