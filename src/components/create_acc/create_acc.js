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
        <h4>Enter Username
          <input
            ref={name => this.nameInput = name}/>
            </h4>
        <h4>Enter Password
          <input
            ref={pass => this.passwordInput = pass}/>
         </h4> 
        <h4>Enter E-Mail
          <input
            ref={email => this.emailInput = email}/>
         </h4> 
        <h4>Enter First Name
          <input
            ref={first_name => this.first_nameInput = first_name}/>
         </h4> 
        <h4>Enter Last Name
          <input
            ref={last_name => this.last_nameInput = last_name}/>
         </h4> 
        <h4>Select Gender
          <input
            ref={gender => this.genderInput = gender}/>
         </h4> 
        <h4>Upload profile pic
          <input
            ref={pic => this.picInput = pic}/>
         </h4> 
        <h4>Enter a short description
          <input
            ref={about => this.aboutInput = about}/>
         </h4> 
        <button onClick = {this.pushAcc} type="submit"> SIGN UP </button>
      </div>
    )
  }
}

export default AddAcc;