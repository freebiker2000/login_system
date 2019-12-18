import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/action/authAction';
import { clearErrors } from '../../redux/action/errorAction';

const RegisterModal = ({ register, error, clearErrors}) => {
  const [ modal, setModal ] = useState(false);
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    msg: null
  })

  console.log(user)
  useEffect(() => {
    if(error.id === 'REGISTER_FAIL') {
      setUser({msg: error.message.message})
    } else {
      setUser({msg: null})
    }
  }, [error.id])

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = user
    const newUser = {
      name, email, password
    }
    console.log(e)
    register(newUser)
  };

  const toggle = () => {
    clearErrors();
    setModal(!modal)
  }

  const onChange = e => {
    return setUser({ [e.target.name]: e.target.value})
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
                onChange={onChange}
              />

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
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { register, clearErrors } )(RegisterModal)