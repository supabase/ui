import { actions } from '@storybook/addon-actions'
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Modal } from '.'
import Typography from '../Typography'

export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args) => (
  <Modal
    {...args}
    className="font-sans"
    onCancel={action('onCancel')}
    onConfirm={action('onConfirm')}
  >
    <Typography.Text>Modal content is inserted here</Typography.Text>
  </Modal>
)
