import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Modal } from '.'
import Typography from '../Typography'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { Space } from '../Space'
import { IconTrash, IconAlertCircle, IconCheck } from './../../index'

export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args: any) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      @import sdsodm
      <Button onClick={() => setVisible(!visible)}>Open modal</Button>
      <Modal {...args} visible={visible} onCancel={() => setVisible(!visible)}>
        <Typography.Text type="secondary">
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via{' '}
          <Typography.Text code>{'{children}'}</Typography.Text>
        </Typography.Text>
      </Modal>
    </>
  )
}

export const withIcon = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withVerticalLayout = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withCloseButton = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      This Modal has a close button on the top right
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const rightAlignedFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const hideFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withFooterBackground = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooterVertical = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooterOneButton = (args: any) => <Modal {...args} />

Default.args = {
  visible: false,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

withFooterBackground.args = {
  visible: false,
  footerBackground: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

const icon = <IconAlertCircle background="brand" size="xlarge" />

withIcon.args = {
  visible: false,
  showIcon: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

withCloseButton.args = {
  visible: false,
  closable: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This Modal has a close button on the top right',
  description: 'And i am the description',
}

withVerticalLayout.args = {
  visible: false,
  size: 'small',
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

rightAlignedFooter.args = {
  visible: false,
  alignFooter: 'right',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

hideFooter.args = {
  visible: false,
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

customFooter.args = {
  visible: false,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  customFooter: [
    <Space>
      <div>
        <Badge color="red" dot size="small">
          Proceed with caution
        </Badge>
      </div>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </Space>,
  ],
}

customFooterVertical.args = {
  visible: false,
  size: 'small',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  layout: 'vertical',
  customFooter: [
    <Space style={{ width: '100%' }}>
      <Button size="medium" block type="secondary">
        Cancel
      </Button>
      <Button size="medium" block danger icon={<IconTrash />}>
        Delete
      </Button>
    </Space>,
  ],
}

customFooterOneButton.args = {
  visible: false,
  size: 'small',
  icon: <IconCheck background="brand" size="xxxlarge" />,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'Payment succesful',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
  layout: 'vertical',
  customFooter: [
    <Space style={{ width: '100%' }}>
      <Button size="medium" block icon={<IconCheck />}>
        Confirm
      </Button>
    </Space>,
  ],
}
