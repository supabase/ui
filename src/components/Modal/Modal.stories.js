import { actions } from '@storybook/addon-actions'
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Modal } from '.'
import Typography from '../Typography'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { Space } from '../Space'

export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args) => (
  <Modal
    {...args}
    visible={true}
    className="font-sans"
    onCancel={action('onCancel')}
    onConfirm={action('onConfirm')}
    title="This is the title of the modal"
    description="And i am the description"
  >
    <Typography.Text>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withIcon = (args) => (
  <Modal
    {...args}
    visible={true}
    showIcon={true}
    className="font-sans"
    onCancel={action('onCancel')}
    onConfirm={action('onConfirm')}
    title="This is the title of the modal"
    description="And i am the description"
  >
    <Typography.Text>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const hideFooter = (args) => (
  <Modal
    {...args}
    visible={true}
    showIcon={true}
    hideFooter={true}
    className="font-sans"
    onCancel={action('onCancel')}
    onConfirm={action('onConfirm')}
    title="This is the title of the modal"
    description="And i am the description"
  >
    <Typography.Text>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooter = (args) => (
  <Modal
    {...args}
    visible={true}
    className="font-sans"
    onCancel={action('onCancel')}
    onConfirm={action('onConfirm')}
    title="This is the title of the modal"
    description="And i am the description"
    customFooter={[
      <Space>
        <div>
          <Badge color="red" dot size="small">
            Proceed with caution
          </Badge>
        </div>
        <Button type="secondary">Cancel</Button>
        <Button danger>Delete</Button>
      </Space>,
    ]}
  >
    <Typography.Text>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code>{'{children}'}</Typography.Text>
    </Typography.Text>
  </Modal>
)
