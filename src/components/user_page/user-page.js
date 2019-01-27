import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props)
    state = {
      title: 'Welcome' + this.name,
      name: this.name,
      age: this.age
    }

  }
}

export default User