import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  addTodoList,
  editTodoList,
  deleteTodoList,
  getTodoList,
} from '../../redux/todo/action'
import { TodoPage } from '../../pages'
import { TodoItem } from '../../models'

export const TodoContainer: React.FC = () => {
  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.todo.list)

  const [editItem, setEditItem] = useState<TodoItem | null>()

  useEffect(() => {
    getTodoList(dispatch)
  }, [])

  const onSubmit = (value: TodoItem) => {
    if (editItem?.title) {
      editTodoList({ ...editItem, ...value }, dispatch)
      setEditItem(null)
    } else {
      addTodoList(
        {
          title: value.title,
          description: value.description,
        },
        dispatch
      )
    }
  }
  const onEdit = (item: TodoItem) => {
    console.log(item)
    setEditItem(item)
  }

  const onDelete = (item: TodoItem) => {
    deleteTodoList(item, dispatch)
  }

  return (
    <Fragment>
      <TodoPage
        editItem={editItem}
        todolist={list}
        onSubmit={onSubmit}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Fragment>
  )
}
