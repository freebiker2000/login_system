import React, {Component} from 'react';
class Input extends Component{
  render() {
    return(
      <div>
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

export default Input