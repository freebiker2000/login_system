import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const ShoppingList = () => {

  const [ list, aaa] = useState([
      {id: uuid(), name: 'Eggs'},
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'Bacon'},
      {id: uuid(), name: 'Beer'}
  ])

  const setItem = () => {
    const addName = prompt("Enter Item");
    const item = {id: uuid(), name: addName};
    list.push(item)
    if(addName) {
        return list
    }
  }

  return(
    <Container>
      <Button 
        color="dark"
        style={{marginBottom: "2rem"}}
        onClick={()=> aaa(setItem)}>
        Add Item
      </Button>
    </Container>
  )
}

export default ShoppingList;