import React from 'react'

import { Accordian } from './'
import { Typography } from '../Typography'
import { IconArrowUp } from '../Icon/icons/IconArrowUp'

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

Default.args = {}

const Multiple = (args: any) => (
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

export const withMultiple = Multiple.bind({})
withMultiple.args = {}

export const withBorder = Multiple.bind({})
withBorder.args = {
  bordered: true,
}

export const withDefaultActive = Multiple.bind({})
withDefaultActive.args = {
  defaultActiveId: 1,
}

export const withIconLeft = Multiple.bind({})
withIconLeft.args = {
  iconPosition: 'left',
}

export const withCustomIcon = Multiple.bind({})
withCustomIcon.args = {
  icon: <IconArrowUp />,
}
