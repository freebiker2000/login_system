import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const ShoppingList = () => {

  const [ list, item] = useState([
      {id: uuid(), name: 'Eggs'},
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'Bacon'},
      {id: uuid(), name: 'Beer'}
  ])
console.log(list)
  const setItem = () => {
    const addName = prompt("Enter Item");
    const item = {id: uuid(), name: addName};
    if(addName) {
      return [...list, item]
    }
  }

  const deleteItem = id => {
    return list.filter(item => item.id !== id)
  }

  return(
    <Container>
      <Button 
        color="dark"
        style={{marginBottom: "2rem"}}
        onClick={()=> item(setItem)}>
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {list.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button 
                  className="remove-btn" 
                  color="danger" 
                  size="sm" 
                  onClick={() => item(deleteItem(id))}
                >&times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  )
}

export default ShoppingList;