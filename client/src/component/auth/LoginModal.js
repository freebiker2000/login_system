import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/action/authAction';
import { clearErrors } from '../../redux/action/errorAction';

const LoginModal = ({ login, error, clearErrors, isAuthenticated}) => {
  const [ modal, setModal ] = useState(false);
  const [ user, setUser ] = useState({
    email: '',
    password: '',
    msg: null
  })

  const toggle = () => {
    clearErrors();
    setModal(!modal)
  }

  const onChange = e => {
    return setUser({ ...user, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(error.id === 'LOGIN_FAIL') {
      setUser({msg: error.message.message})
    } else {
      setUser({msg: null})
    };

    if(isAuthenticated) {
      toggle();
    }
  }, [error.id, isAuthenticated])

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = user;
    const logUser = {
      email,
      password
    }

    login(logUser);
  };


  return(
    <div>
      <NavLink onClick={toggle} href='#'>
        Login
      </NavLink>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          {user.msg ? <Alert color='danger'> {user.msg} </Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Enter E-mail'
                className='mb-3'
                onChange={onChange}
              />

              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Enter Password'
                className='mb-3'
                onChange={onChange}
              />

              <Button
                type="submit"
                color='dark'
                style={{marginTop: '2rem'}}
                block>
                Login
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

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { login, clearErrors } )(LoginModal)