import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types';
import axios from 'axios';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction'

export const getItems = () => dispach => {
  dispach(itemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispach({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err => dispach(returnErrors(err.response.data, err.response.status)))
}

export const addItem = item => (dispach, getState) =>  {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then(res => 
      dispach({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => dispach(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = id => (dispach, getState) => {
  console.log(getState())
  axios
  .delete(`/api/items/${id}`, tokenConfig(getState))
  .then(res => {
    dispach({
      type: DELETE_ITEM,
      id
    })
  })
  .catch(err => dispach(returnErrors(err.response.data, err.response.status)))
}

export const itemsLoading = () => ({
  type: ITEMS_LOADING
})
