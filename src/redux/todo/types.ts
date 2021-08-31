import { TodoItem } from '../../models'
import { ADD_LIST_ITEM, EDIT_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'

interface AddListItemAction {
  type: typeof ADD_LIST_ITEM
  payload: TodoItem
}

interface DeleteListItemAction {
  type: typeof DELETE_LIST_ITEM
  payload: number
}

interface EditListItemAction {
  type: typeof EDIT_LIST_ITEM
  payload: TodoItem
}

export type TodoActionTypes =
  | AddListItemAction
  | EditListItemAction
  | DeleteListItemAction

export interface TodoState {
  list: Array<TodoItem>
}
