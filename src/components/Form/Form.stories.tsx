import React from 'react'

import { Form } from '.'
import { Input, Button, Space } from '../../index'

export default {
  title: 'Data Input/Form',
  component: Form,
}

export const Default = (args: any) => (
  <>
    <Form {...args}>
      <Space direction="vertical" size={6}>
        <Input
          id="firstName"
          label="first name"
          placeholder="something in here"
        />
        <Input
          id="lastName"
          label="last name"
          placeholder="something in here"
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  </>
)

Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  className: 'font-sans',
  layout: 'vertical',
}
