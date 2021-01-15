import React from 'react'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Icon } from '../Icon'
import { Menu } from '../Menu'
import Typography from '../Typography'
// import { AutoForm } from 'uniforms'

import { Dropdown } from './'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider />,
        <Menu>
          <Menu.Item icon={<Icon type="Settings" size="tiny" />}>
            Settings
          </Menu.Item>
          <Divider />
          <Menu.Item>Something</Menu.Item>
          <Menu.Item>Something</Menu.Item>
        </Menu>,
        <Divider />,
        <Dropdown.Item>
          <Button type="default" icon={<Icon type="LogOut" />}>
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<Icon type={'ChevronDown'} />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}
