import React, {Component} from 'react';
import Axios from 'axios';
import { BASE_URL } from '../constant/constant';
import Input from '../input/input'

class Login extends Component {

  async getAcc() {
    try {
      await Axios
      .get(`${BASE_URL}users`,
      {
        name: this.nameInput.value,
        password: this.passwordInput.value
      },
      {
        'Content-Type': 'aplication/json'
      })
    } catch(e){
      console.log()
    }
  }

  render() {
    return(
      <Input />
    )
  }
}

export default Login;