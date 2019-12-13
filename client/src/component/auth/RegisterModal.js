import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/action/authAction'

const RegisterModal = ({ register, error}) => {
  const [ modal, setModal ] = useState(false);
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    msg: null
  })

  const mounted = useRef(user.msg);
  console.log(modal)
  useEffect(() => {
    if(error !== mounted.current) {
      if(error.id === 'REGISTER_FAIL') {
        setUser({msg: error.message.message})
      } else {
        setUser({msg: null})
      }
    }
  }, [user.msg])

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = user
    const newUser = {
      name, email, password
    }
    register(newUser)
  };

  const toggle = () => {
    setModal(!modal)
  }

  return(
    <div>
      <NavLink onClick={toggle} href='#'>
        Register
      </NavLink>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader>Register</ModalHeader>
        <ModalBody>
          {user.msg ? <Alert color='danger'> {user.msg} </Alert> : null}
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
});

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { register } )(RegisterModal)