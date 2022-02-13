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
  <Menu type="text">
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const withActiveState = (args: any) => (
  <Menu type="text">
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const pills = (args: any) => (
  <Menu type="pills">
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const border = (args: any) => (
  <Menu type="border">
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<SampleIcon />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const Groups = () => (
  <Menu type="text">
    <Menu.Group title="First group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const PillsAndGroups = () => (
  <Menu type="pills">
    <Menu.Group title="First group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />} active>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)

export const BorderAndGroups = () => (
  <Menu type="border">
    <Menu.Group title="First group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />} active>
      Account settings
    </Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
    <Menu.Item icon={<SampleIcon />}>Account settings</Menu.Item>
  </Menu>
)
