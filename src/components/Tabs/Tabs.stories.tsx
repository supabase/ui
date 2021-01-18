import React from 'react'
import { Icon } from '../Icon'
import Typography from '../Typography'

import { Tabs } from './'

export default {
  title: 'Displays/Tabs',
  component: Tabs,
}

export const Default = (args: any) => (
  <Tabs defaultActiveId={'panel-1'}>
    <Tabs.Panel id="panel-1" label="1st tab">
      <Typography.Text>Content for the first panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-2" label="2nd tab">
      <Typography.Text>Content for the second panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-3" label="3rd tab">
      <Typography.Text>Content for the third panel</Typography.Text>
    </Tabs.Panel>
  </Tabs>
)

export const Underlined = (args: any) => (
  <Tabs defaultActiveId={'panel-1'} {...args}>
    <Tabs.Panel id="panel-1" label="1st tab">
      <Typography.Text>Content for the first panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-2" label="2nd tab">
      <Typography.Text>Content for the second panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-3" label="3rd tab">
      <Typography.Text>Content for the third panel</Typography.Text>
    </Tabs.Panel>
  </Tabs>
)

export const WithIcons = (args: any) => (
  <Tabs defaultActiveId={'panel-1'} {...args}>
    <Tabs.Panel id="panel-1" label="1st tab" icon={<Icon type="Mail" />}>
      <Typography.Text>Content for the first panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-2" label="2nd tab" icon={<Icon type="Mail" />}>
      <Typography.Text>Content for the second panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-3" label="3rd tab" icon={<Icon type="Mail" />}>
      <Typography.Text>Content for the third panel</Typography.Text>
    </Tabs.Panel>
  </Tabs>
)

export const LargeButtons = (args: any) => (
  <Tabs defaultActiveId={'panel-1'} {...args}>
    <Tabs.Panel id="panel-1" label="1st tab">
      <Typography.Text>Content for the first panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-2" label="2nd tab">
      <Typography.Text>Content for the second panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-3" label="3rd tab">
      <Typography.Text>Content for the third panel</Typography.Text>
    </Tabs.Panel>
  </Tabs>
)

export const BlockTabs = (args: any) => (
  <Tabs defaultActiveId={'panel-1'} {...args}>
    <Tabs.Panel id="panel-1" label="1st tab">
      <Typography.Text>Content for the first panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-2" label="2nd tab">
      <Typography.Text>Content for the second panel</Typography.Text>
    </Tabs.Panel>
    <Tabs.Panel id="panel-3" label="3rd tab">
      <Typography.Text>Content for the third panel</Typography.Text>
    </Tabs.Panel>
  </Tabs>
)

const limit = 30
let infitniteSroll: JSX.Element[] = []

for (var i = 0; i < limit; i++) {
  infitniteSroll.push(
    <Tabs.Panel id={`panel-${i}`} label={`Tab ${i}`}>
      <Typography.Text>Content for the panel {i}</Typography.Text>
    </Tabs.Panel>
  )
}

export const Scroll = (args: any) => (
  <Tabs defaultActiveId={'panel-1'} {...args}>
    {infitniteSroll}
  </Tabs>
)

Default.args = {
  title: 'something',
}

Underlined.args = {
  title: 'something',
  type: 'underlined',
}

WithIcons.args = {
  title: 'something',
  type: 'underlined',
}

LargeButtons.args = {
  title: 'something',
  type: 'underlined',
  size: 'large',
}
BlockTabs.args = {
  title: 'something',
  type: 'underlined',
  block: true,
}
Scroll.args = {
  title: 'something',
  type: 'underlined',
  block: true,
  scrollable: true,
}

// <Tabs>
//   <Tabs.Panel id="panel-1" label="2nd tab">
//     <p>Content for the first panel</p>
//   </Tabs.Panel>
//   <Tabs.Panel id="panel-2" label="2nd tab">
//     <p>Content for the second panel</p>
//   </Tabs.Panel>
//   <Tabs.Panel id="panel-3" label="3rd tab">
//     <p>Content for the third panel</p>
//   </Tabs.Panel>
// </Tabs>
