import React, { Fragment } from 'react'
import { TodoInput, TodoList } from '../components'
import { TodoItem } from '../models'

export const TodoPage: React.FC<TodoPageProps> = ({
  onSubmit,
  onEdit,
  todolist,
  editItem,
  onDelete,
}: TodoPageProps) => {
  return (
    <Fragment>
      <TodoInput editItem={editItem} onSubmit={onSubmit} />
      <TodoList todolist={todolist} onEdit={onEdit} onDelete={onDelete} />
    </Fragment>
  )
}

export interface TodoPageProps {
  todolist: Array<TodoItem>
  editItem?: TodoItem | null
  onSubmit: (value: TodoItem) => void
  onEdit: (item: TodoItem) => void
  onDelete: (item: TodoItem) => void
}
