import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../redux/action/itemAction';
import PropTypes from 'prop-types';

const ShoppingList = ({itemList, deleteItem, getItems}) => {

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {itemList.items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button 
                  className="remove-btn" 
                  color="danger" 
                  size="sm" 
                  onClick={deleteItem(_id)}
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
  // items: PropTypes.object.isRequired
}

const mapStateToProps = state => ({itemList: state.itemReducer})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);