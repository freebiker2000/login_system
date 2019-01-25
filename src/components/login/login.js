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
    let {data} = await Axios
      .get(`${BASE_URL}users`)
      data.forEach(({name, password}) => {
        if(this.nameInput.value === name && this.passInput.value === password){
          alert('ii bun')
        }
        else {
          alert('nu ii bun')
        }
      }
    )
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