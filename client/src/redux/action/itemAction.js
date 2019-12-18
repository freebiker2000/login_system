import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types';
import axios from 'axios'

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
}

export const addItem = item => dispach =>  {
  axios
    .post('/api/items', item)
    .then(res => 
      dispach({
        type: ADD_ITEM,
        payload: res.data
      })
    )
}

export const deleteItem = id => dispach => {
  axios
  .delete(`/api/items/${id}`)
  .then(res => {
    dispach({
      type: DELETE_ITEM,
      id
    })
  })
}

export const itemsLoading = () => ({
  type: ITEMS_LOADING
})
