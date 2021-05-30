import React from 'react'

import { Accordian } from './'

export default {
  title: 'Displays/Accordian',
  component: Accordian,
}

export const Single = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="Single Item">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </div>
    </Accordian.Item>
  </Accordian>
)

export const Multiple = (args: any) => (
  <Accordian {...args}>
    <Accordian.Item label="1st Item">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </div>
    </Accordian.Item>
    <Accordian.Item label="2nd Item">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        amet labore.
      </div>
    </Accordian.Item>
  </Accordian>
)

Single.args = {}
