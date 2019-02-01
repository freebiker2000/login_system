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
            email: this.emailInput.value,
            first_name: this.first_nameInput.value,
            last_name: this.last_nameInput.value,
            gender: this.genderInput.value,
            pic: this.picInput.value,
            about: this.aboutInput.value,
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
      <div className="input_wrapper">
        <div>
          <h4>Enter Username</h4>
          <input ref={name => this.nameInput = name}/>
        </div>
        <div>
          <h4>Enter Password</h4> 
          <input ref={pass => this.passwordInput = pass}/>
        </div>
        <div>
          <h4>Enter E-Mail</h4> 
          <input ref={email => this.emailInput = email}/>
        </div>
        <div>
          <h4>Enter First Name</h4> 
          <input ref={first_name => this.first_nameInput = first_name}/>
        </div>
        <div>
          <h4>Enter Last Name</h4> 
          <input ref={last_name => this.last_nameInput = last_name}/>
        </div>
        <div>
          <h4>Select Gender</h4> 
          <input ref={gender => this.genderInput = gender}/>
        </div>
        <div>
          <h4>Upload profile pic</h4> 
          <input ref={pic => this.picInput = pic}/>
        </div>
        <div>
          <h4>Enter a short description</h4> 
          <input ref={about => this.aboutInput = about}/>
        </div>
        <div>
          <button onClick = {this.pushAcc} type="submit"> SIGN UP </button>
        </div>
      </div>
    )
  }
}

export default AddAcc;