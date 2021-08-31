import { TodoItem } from '../../models'
import {
  apiGetTodoList,
  apiAddTodoItem,
  apiEditTodoItem,
  apiDeleteTodoItem,
} from '../../utlis/api'
import { ADD_LIST_ITEM, EDIT_LIST_ITEM } from './actionTypes'

export function getTodoList(dispatch: any) {
  apiGetTodoList().then(
    (response) => {
      console.log(response.data)
      dispatch({
        type: ADD_LIST_ITEM,
        payload: response.data,
      })
    },
    (error) => {
      console.log(error)
    }
  )
}

export function addTodoList(item: TodoItem, dispatch: any) {
  apiAddTodoItem(item).then(
    () => {
      getTodoList(dispatch)
    },
    (error) => {
      console.log(error)
    }
  )
}

export function editTodoList(item: TodoItem, dispatch: any) {
  apiEditTodoItem(item).then(
    () => {
      dispatch({
        type: EDIT_LIST_ITEM,
        payload: item,
      })
    },
    (error) => {
      console.log(error)
    }
  )
  dispatch({
    type: EDIT_LIST_ITEM,
    payload: item,
  })
}

export function deleteTodoList(item: TodoItem, dispatch: any) {
  apiDeleteTodoItem(item).then(
    () => {
      getTodoList(dispatch)
    },
    (error) => {
      console.log(error)
    }
  )
}
