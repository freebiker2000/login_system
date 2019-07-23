import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

export const getItems = () => ({
  type: GET_ITEMS
})

export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const deleteItem = id => ({
  type: DELETE_ITEM,
  id
})
