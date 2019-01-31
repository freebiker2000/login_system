import React, {Component} from 'react';
import Axios from 'axios';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { BASE_URL } from '../constant/constant';


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
          return false
        }
      }
    )
} 
      
    render() {
      return(
        <div>
          <h3>Enter Username</h3>
          <p>
            <input ref={name => this.nameInput = name} type="text"/>
          </p>
          <h3>Enter Password</h3>
          <p>
            <input ref={pass => this.passInput = pass} type="text"/>
          </p>
          <button onClick={this.getAcc} type="submit"> LOG IN </button>
        </div>
        )
      }
    }
    
export default Login;