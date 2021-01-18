import React from 'react'
// import { AutoForm } from 'uniforms'

import { Input } from '.'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Dropdown } from '../Dropdown'
import { Icon } from '../Icon'
import { Menu } from '../Menu'
import Select from '../Select'
import { Space } from '../Space'
import Typography from '../Typography'

export default {
  title: 'Data Input/Input',
  component: Input,
}

export const Testing = () => (
  <>
    <Space size={2} direction="vertical">
      <Input placeholder="something" />
      <Input placeholder="something" label="i have a label" />
      <Input
        layout="horizontal"
        placeholder="something"
        label="i have a label"
      />
      <Input layout="horizontal" placeholder="something" />
    </Space>
  </>
)

export const Default = (args: any) => <Input {...args} />

export const ErrorState = (args: any) => <Input {...args} />

export const withIcon = (args: any) => <Input {...args} />

export const withOption = (args: any) => <Input {...args} />

export const withDescription = (args: any) => <Input {...args} />

export const withCustomStyle = (args: any) => <Input {...args} />

export const textArea = (args: any) => <Input.TextArea {...args} />

export const textAreaWithLimit = (args: any) => <Input.TextArea {...args} />

export const addOnBefore = (args: any) => <Input {...args} />

export const addOnBeforeDropdown = (args: any) => <Input {...args} />

const icon: any = <Icon type={'Package'} />

Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  className: 'font-sans',
  layout: 'vertical',
}

ErrorState.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  error: 'Your password must be less than 4 characters.',
}

withIcon.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an icon',
  className: 'font-sans',
  icon: icon,
}

withOption.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  labelOptional: 'This is required',
}

withDescription.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  descriptionText: 'Make your password short and easy to guess',
}

withCustomStyle.args = {
  type: 'text',
  label: 'This has custom styling {width: 50%}',
  className: 'font-sans',
  style: { width: '50%' },
}

textArea.args = {
  type: 'text',
  label: 'This is a text area',
  className: 'font-sans',
}

textAreaWithLimit.args = {
  type: 'text',
  label: 'This is a text area, with 10 rows',
  labelOptional: '500 character limit',
  className: 'font-sans',
  rows: 10,
  limit: 500,
}

const addOnBeforeJsx = (
  <Select style={{ width: '120px' }} layout="vertical">
    <Select.Option value="html">HTML asdsds d</Select.Option>
    <Select.Option value="javascript">Javascript</Select.Option>
    <Select.Option value="typescript">Typescript</Select.Option>
  </Select>
)
addOnBefore.args = {
  type: 'text',
  label: 'This is a text area, with 10 rows',
  labelOptional: '500 character limit',
  className: 'font-sans',
  rows: 10,
  limit: 500,
  addOnBefore: addOnBeforeJsx,
  layout: 'horizontal',
  icon: <Icon type="Email" />,
}

const addOnBeforeJsxDropdown = (
  <Dropdown
    placement="bottomLeft"
    overlay={[
      <Dropdown.Item>
        <Typography.Text>Choose a filter</Typography.Text>
        <div>
          <Typography.Text strong>you'd like to use</Typography.Text>
        </div>
      </Dropdown.Item>,
      <Divider light />,
      <Menu>
        <Menu.Item icon={<Icon type="User" size="tiny" />}>
          Paid Users
        </Menu.Item>
        <Menu.Item icon={<Icon type="User" size="tiny" />}>Staff</Menu.Item>
        <Menu.Item icon={<Icon type="User" size="tiny" />}>
          Free Users
        </Menu.Item>
      </Menu>,
    ]}
  >
    <Button type="outline" size="small" iconRight={<Icon type="ChevronDown" />}>
      🇸🇬 <span style={{ marginLeft: '8px' }}>Singapore</span>
    </Button>
  </Dropdown>
)

addOnBeforeDropdown.args = {
  type: 'text',
  label: 'This is a text area, with 10 rows',
  labelOptional: '500 character limit',
  className: 'font-sans',
  rows: 10,
  limit: 500,
  addOnBefore: addOnBeforeJsxDropdown,
  layout: 'horizontal',
  placeholder: 'Your Postcode',
}
