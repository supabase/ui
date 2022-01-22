import React from 'react'

import { Divider } from '../Divider'
import { IconMail } from './../../index'
import Typography from '../Typography'

import { Menu } from './'

export default {
  title: 'Navigation/Menu',
  component: Menu,
}

const SampleIcon = () => <IconMail size={14} strokeWidth={2} />

export const Default = (args: any) => (
  <Menu>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const withActiveState = (args: any) => (
  <Menu>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const withRounded = (args: any) => (
  <Menu>
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Divider />
    <Menu.Item rounded active icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
  </Menu>
)

export const withGroupTitles = () => (
  <Menu>
    <Menu.Group title="First group" />
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
  </Menu>
)

export const withActiveBar = () => (
  <Menu>
    <Menu.Group title="First group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item active showActiveBar icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
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
