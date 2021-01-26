import { action } from '@storybook/addon-actions'
import React from 'react'
import { Button, Space, Typography } from '../../index'

import { SlideOver } from './index'

export default {
  title: 'Overlays/SlideOver',
  component: SlideOver,
}

export const Default = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

export const withWideLayout = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

export const leftAlignedFooter = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

export const leftAligned = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

export const hideFooter = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

export const customFooter = (args: any) => (
  <>
    <SlideOver {...args}>
      <Typography.Text type="secondary">
        Slideover content is inserted here, if you need to insert anything into
        the Slideover you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SlideOver>
  </>
)

Default.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
}

withWideLayout.args = {
  visible: true,
  wide: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
}

leftAlignedFooter.args = {
  visible: true,
  alignFooter: 'left',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
}

leftAligned.args = {
  visible: true,
  align: 'left',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
}

hideFooter.args = {
  visible: true,
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
}

customFooter.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the slideover',
  description: 'And i am the description',
  customFooter: [
    <Space>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </Space>,
  ],
}
