import axios from 'axios'

import { TodoItem } from '../models'

export const apiGetTodoList = () => {
  return axios.get<TodoItem[]>(`${process.env.REACT_APP_BASE_URL}/todos`)
}

export const apiAddTodoItem = (item: TodoItem) => {
  return axios.post<TodoItem[]>(`${process.env.REACT_APP_BASE_URL}/todos`, item)
}

export const apiEditTodoItem = (item: TodoItem) => {
  return axios.put<TodoItem[]>(
    `${process.env.REACT_APP_BASE_URL}/todos/${item.id}`,
    item
  )
}

export const apiDeleteTodoItem = (item: TodoItem) => {
  return axios.delete<TodoItem[]>(
    `${process.env.REACT_APP_BASE_URL}/todos/${item.id}`
  )
}
