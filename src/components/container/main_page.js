import React, {Component} from 'react'

class Main extends Component {
  render() {
    return(
      <div>
        <div>
          <h3>Enter Username or E-mail</h3>
          <input type="text"></input>
        </div>
        <div>
          <h3>Enter Password</h3>
          <input type="text"></input>
        </div>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </div>
    )
  }
}

export default Main;