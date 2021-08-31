/* eslint-disable */

import { TodoItem } from '../../models'
import { ADD_LIST_ITEM, EDIT_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'
import { TodoActionTypes } from './types'

const initialState = {
  list: new Array<TodoItem>(),
}

export default (state = initialState, action: TodoActionTypes) => {
  const list = state.list.slice()
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, list: action.payload }

    case EDIT_LIST_ITEM:
      const editItem = list.find((item) => item.id === action.payload.id)
      if (editItem) {
        editItem.title = action.payload.title
        editItem.description = action.payload.description
      }
      return { ...state, list }
    default:
      return state
  }
}
