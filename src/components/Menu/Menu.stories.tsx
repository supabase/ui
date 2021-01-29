import React from 'react'

import { Divider } from '../Divider'
import { Icon } from '../Icon'
import Typography from '../Typography'

import { Menu } from './'

export default {
  title: 'Navigation/Menu',
  component: Menu,
}

export const Default = (args: any) => (
  <Menu>
    <Menu.Item icon={<Icon type="Mail" />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item icon={<Icon type="Mail" />}>Account settings</Menu.Item>
    <Menu.Item icon={<Icon type="Mail" />}>Account settings</Menu.Item>
  </Menu>
)

export const withActiveState = (args: any) => (
  <Menu>
    <Menu.Item icon={<Icon type="Mail" />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<Icon type="Mail" />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<Icon type="Mail" />}>Account settings</Menu.Item>
  </Menu>
)

export const withRounded = (args: any) => (
  <Menu>
    <Menu.Item rounded icon={<Icon type="Mail" />}>
      Account settings
    </Menu.Item>
    <Divider />
    <Menu.Item rounded active icon={<Icon type="Mail" />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<Icon type="Mail" />}>
      Account settings
    </Menu.Item>
  </Menu>
)

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withActiveState.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withRounded.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}
