import React, { Fragment, useEffect } from 'react'
import { Input, Form, Button } from 'antd'
import { TodoItem } from '../../models'

import './style.css'

const TodoInput: React.FC<TodoInputProps> = ({
  onSubmit,
  editItem,
}: TodoInputProps) => {
  const [form] = Form.useForm()
  const isEdit = !!editItem
  useEffect(() => {
    form.setFieldsValue(editItem)
  }, [editItem])

  return (
    <Fragment>
      <Form
        className="form-container"
        form={form}
        onFinish={(value) => {
          onSubmit(value)
          form.resetFields()
        }}
      >
        <Form.Item name="title" className='input-item'>
          <Input placeholder="Enter title"  />
        </Form.Item>
        <Form.Item
          name="description"
          className='input-item'
          
        >
          <Input placeholder="Enter description" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">{isEdit ? 'Edit' : 'Add'}</Button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default TodoInput

export interface TodoInputProps {
  editItem?: TodoItem | null
  onSubmit: (value: TodoItem) => void
}
