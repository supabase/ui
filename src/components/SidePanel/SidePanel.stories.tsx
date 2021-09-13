import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { Button, Space, Typography, Popover, Dropdown } from '../../index'

import { SidePanel } from './index'

export default {
  title: 'Overlays/SidePanel',
  component: SidePanel,
}

export const Default = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const withWideLayout = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const leftAlignedFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const leftAligned = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const hideFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const customFooter = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        SidePanel content is inserted here, if you need to insert anything into
        the SidePanel you can do so via{' '}
        <Typography.Text code>{'{children}'}</Typography.Text>
      </Typography.Text>
    </SidePanel>
  </>
)

export const triggerElement = (args: any) => (
  <>
    <SidePanel {...args}>
      <Typography.Text type="secondary">
        This was opened with a trigger element
      </Typography.Text>
    </SidePanel>
  </>
)

export const nestedSidepanels = (args: any) => {
  const [panel1Visible, setPanel1Visible] = useState(false)
  const [panel2Visible, setPanel2Visible] = useState(false)

  return (
    <>
      <Button type="secondary" onClick={() => setPanel1Visible(true)}>
        Open panel 1
      </Button>
      <SidePanel visible={panel1Visible}>
        <Typography.Text type="secondary">
          This was opened with a trigger element
        </Typography.Text>
        <Button type="secondary" onClick={() => setPanel2Visible(true)}>
          Open panel 2
        </Button>
        <Button type="secondary" onClick={() => setPanel1Visible(false)}>
          Close panel 1
        </Button>
        <SidePanel visible={panel2Visible}>
          <Button type="secondary" onClick={() => setPanel2Visible(false)}>
            close panel 2
          </Button>
        </SidePanel>
      </SidePanel>
    </>
  )
}

export const otherFormElements = (args: any) => (
  <>
    <SidePanel {...args}>
      <p>
        <Typography.Text type="secondary">
          This has other form elements
        </Typography.Text>
      </p>
      <div>
        <Popover
          className="w-80 pointer-events-auto"
          overlay={[<div>This is a popover</div>]}
        >
          <Typography.Text>Open popover</Typography.Text>
        </Popover>
      </div>
      <div>
        <Dropdown
          className="w-80 pointer-events-auto"
          overlay={[
            <Dropdown.Misc>This is a dropdown 1</Dropdown.Misc>,
            <Dropdown.Misc>This is a dropdown 2</Dropdown.Misc>,
          ]}
        >
          <Typography.Text>Open dropdown</Typography.Text>
        </Dropdown>
      </div>
    </SidePanel>
  </>
)

Default.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
}

withWideLayout.args = {
  visible: true,
  wide: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
}

leftAlignedFooter.args = {
  visible: true,
  alignFooter: 'left',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
}

leftAligned.args = {
  visible: true,
  align: 'left',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
}

hideFooter.args = {
  visible: true,
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
}

customFooter.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
  customFooter: [
    <Space>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </Space>,
  ],
}

triggerElement.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
  triggerElement: <Button as="span">Open</Button>,
}

otherFormElements.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the SidePanel',
  description: 'And i am the description',
  triggerElement: <Button as="span">Open</Button>,
}
