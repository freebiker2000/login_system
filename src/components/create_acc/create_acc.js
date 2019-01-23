import React, {Component } from 'react';
import Axios from 'axios';
// import Input from '../input/input';
import { BASE_URL } from '../constant/constant';

class AddAcc extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.pushAcc = this.pushAcc.bind(this)
  }

  async pushAcc() {
    try {
      await Axios
        .post(
          `${BASE_URL}users`,
          {
            name: this.nameInput.value,
            password: this.passwordInput.value,
          },
          {
            'Content-Type': 'aplication/json'
          }
        )
      this.props.newAcc(this.input.value);
    } catch(e) {
    }
  }
  render() {
    return(
      <div>
        <h3>Enter Username or E-mail</h3>
        <p>
          <input
            ref={name => this.nameInput = name} />
        </p>
        <div>
          <h3>Enter Password</h3>
        </div>
        <p>
          <input
            ref={pass => this.passwordInput = pass} />
        </p>
        <button onClick = {this.pushAcc} type="submit"> SIGN UP </button>
      </div>
    )
  }
}

export default AddAcc;