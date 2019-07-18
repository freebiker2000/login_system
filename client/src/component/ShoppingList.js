import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../redux/action/itemAction';
import PropTypes from 'prop-types';

const ShoppingList = ({itemList, deleteItem}) => {

  return(
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {itemList.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button 
                  className="remove-btn" 
                  color="danger" 
                  size="sm" 
                  onClick={() => deleteItem(id)}
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({itemList: state.item})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);