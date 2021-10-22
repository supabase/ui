import React from 'react'

import { Accordion } from '.'
import { Typography } from '../Typography'
import { IconArrowUp } from '../Icon/icons/IconArrowUp'

export default {
  title: 'Displays/Accordion',
  component: Accordion,
}

export const Default = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item label="Single Item">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
  </Accordion>
)

Default.args = {}

const Multiple = (args: any) => (
  <Accordion {...args}>
    <Accordion.Item label="1st Item" id={1}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
    <Accordion.Item label="2nd Item" id={2}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </Typography>
    </Accordion.Item>
  </Accordion>
)

export const withMultiple = Multiple.bind({})
withMultiple.args = {}

export const withBorder = Multiple.bind({})
withBorder.args = {
  bordered: true,
}

export const withDefaultActive = Multiple.bind({})
withDefaultActive.args = {
  defaultActiveId: [1],
}

export const withIconLeft = Multiple.bind({})
withIconLeft.args = {
  iconPosition: 'left',
}

export const withCustomIcon = Multiple.bind({})
withCustomIcon.args = {
  icon: <IconArrowUp />,
}
