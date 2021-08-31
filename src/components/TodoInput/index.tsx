import React, { Fragment, useEffect } from 'react'
import { Input, Form, Button } from 'antd'
import { TodoItem } from '../../models'

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
        form={form}
        onFinish={(value) => {
          onSubmit(value)
          form.resetFields()
        }}
        style={{ display: 'flex', width: '100%', alignItems: 'center' }}
      >
        <Form.Item name="title" style={{ width: '100%', marginRight: '15px' }}>
          <Input placeholder="Enter title" />
        </Form.Item>
        <Form.Item
          name="description"
          style={{ width: '100%', marginRight: '15px' }}
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
