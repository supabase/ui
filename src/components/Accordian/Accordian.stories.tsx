import React from 'react'

import { Accordian } from './'
import { Typography } from '../Typography'

export default {
  title: 'Displays/Accordian',
  component: Accordian,
}

export const Default = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="Single Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
  </Accordian>
)

export const withMultiple = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="1st Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
    <Accordian.Item label="2nd Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
  </Accordian>
)

export const withBorder = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="1st Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
    <Accordian.Item label="2nd Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
  </Accordian>
)

export const withDefaultActive = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="Single Item" id={1}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
  </Accordian>
)

Default.args = {}

withMultiple.args = {}

withBorder.args = {
  bordered: true,
}

withDefaultActive.args = {
  defaultActiveId: 1,
}
