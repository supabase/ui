import React from 'react'

import { Accordian } from './'
import { Typography } from '../Typography'

export default {
  title: 'Displays/Accordian',
  component: Accordian,
}

export const Single = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="Single Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordian.Item>
  </Accordian>
)

export const Multiple = (args: any) => (
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

export const Bordered = (args: any) => (
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

Single.args = {}

Multiple.args = {}

Bordered.args = {
  bordered: true,
}
