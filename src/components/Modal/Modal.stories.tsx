import { actions } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Modal } from '.'
import Typography from '../Typography'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { Space } from '../Space'
import { IconTrash, IconAlertCircle, IconCheck } from './../../index'
import { Dropdown } from '../Dropdown'

export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary">
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

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

export const LongModal = () => (
  <div>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <Modal visible={true}>
      <Typography.Text type="secondary">
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </Modal>
  </div>
)

export const customFooterOneButton = (args: any) => <Modal {...args} />

export const modalWithDropdowns = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Open</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(!visible)}
        hideFooter
        // className="pointer-events-auto"
      >
        <Dropdown
          // className="pointer-events-auto"
          overlay={
            <>
              <Dropdown.Item onClick={() => console.log('item 1 clicked')}>
                Item 1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => console.log('item 2 clicked')}>
                Item 2
              </Dropdown.Item>
            </>
          }
        >
          <Button as="span">Trigger dropdown</Button>
        </Dropdown>
      </Modal>
    </>
  )
}

Default.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

withFooterBackground.args = {
  visible: true,
  footerBackground: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

const icon = <IconAlertCircle background="brand" size="xlarge" />

withIcon.args = {
  visible: true,
  showIcon: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

withCloseButton.args = {
  visible: true,
  closable: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This Modal has a close button on the top right',
  description: 'And i am the description',
}

withVerticalLayout.args = {
  visible: true,
  size: 'small',
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

rightAlignedFooter.args = {
  visible: true,
  alignFooter: 'right',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

hideFooter.args = {
  visible: true,
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

customFooter.args = {
  visible: true,
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
  visible: true,
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
  visible: true,
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
