import React, { Fragment } from 'react'
import { Button, List } from 'antd'

import { TodoItem } from '../../models'

const TodoList: React.FC<TodoListProps> = ({
  todolist,
  onEdit,
  onDelete,
}: TodoListProps) => {
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={todolist}
        renderItem={(item) => (
          <List.Item>
            <div>
              {item.title} |{' '}
              <span style={{ color: 'gray' }}>{item.description}</span>
            </div>
            <div>
              <Button
                onClick={() => onEdit(item)}
                style={{ marginRight: '13px' }}
              >
                Edit
              </Button>
              <Button onClick={() => onDelete(item)} danger>
                Delete
              </Button>
            </div>
          </List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoList

export interface TodoListProps {
  todolist: Array<TodoItem>
  onEdit: (item: TodoItem) => void
  onDelete: (item: TodoItem) => void
}
