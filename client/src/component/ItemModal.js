import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../redux/action/itemAction';
import uuid from 'uuid';

const ItemModal = ({addItem}) => {
  let [ modal, toogle ] = useState(false);
  console.log(modal)

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name
    const newItem = {
      id: uuid(),
      name: value
    }
    addItem(newItem);
    toogle();
  }

  // const onChange = () => {

  // }

  return(
    <div>
      <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={toogle}
      >
        Add Item
      </Button>
      <Modal
        isOpen={modal}
        toogle={() => toogle((modal ? false : true))}
      >
        <ModalHeader>Add item to List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            {/* <FormGroup> */}
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
            {/* </FormGroup> */}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem } )(ItemModal)