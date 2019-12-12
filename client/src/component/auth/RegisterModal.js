import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/action/authAction'

const RegisterModal = ({addItem, register}) => {
  const [ modal, toogle ] = useState(false);
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    msg: null
  })

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = user
    console.log(name)
    const newUser = {
      name, email, password
    }
    register(newUser)
  };

  // static propTypes = {
  //   isAuthenticated: PropTypes.bool,
  //   error: PropTypes.object.isRequired,
  //   register: PropTypes.func.isRequired
  // }

  return(
    <div>
      <NavLink onClick={toogle} href='#'>
        Register
      </NavLink>
      <Modal
        isOpen={modal}
        toogle={() => toogle((modal ? false : true))}
      >
        <ModalHeader>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
              />

              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Enter E-mail'
                className='mb-3'
              />

              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Enter Password'
                className='mb-3'
              />

              <Button
                color='dark'
                style={{marginTop: '2rem'}}
                block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
})

export default connect(mapStateToProps, { register } )(RegisterModal)