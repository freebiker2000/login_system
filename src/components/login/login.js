import React, {Component} from 'react';
import Axios from 'axios';
import { BASE_URL } from '../constant/constant';

class Login extends Component {

  async getAcc() {
    try {
      await Axios
      .get(`${BASE_URL}users`,
      {
        name: this.nameInput.value,
        password: this.passInput.value
      },
      {
        'Content-Type': 'aplication/json'
      })
    } catch(e){
    }
  }

  render() {
    return(
      <div>
        <button> SIGN IN </button>
      </div>
    )
  }
}

export default Login;