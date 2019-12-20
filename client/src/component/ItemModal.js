import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../redux/action/itemAction';

const ItemModal = ({addItem, isAuth}) => {
  const [ modal, setModal ] = useState(false);

  const toggle = () => {
    setModal(!modal)
  }

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name
    const newItem = {
      name: value
    }
    addItem(newItem);
    toggle();
  }

  return(
    <div>
      {isAuth ? <Button
                  color='dark'
                  style={{marginBottom: '2rem'}}
                  onClick={toggle}
                >
                  Add Item
                </Button>
          :
          <h4 className="mb-3 ml-4">Please login to manage items</h4>}
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader>Add item to List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input
                type='text'
                name='name'
                id='item'
                placeholder='Add Item'
                // onChange={onChange}
              />
              <Button
                color='dark'
                style={{marginTop: '2rem'}}
                block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { addItem } )(ItemModal)