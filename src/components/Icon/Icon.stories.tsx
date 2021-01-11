import React from 'react'
import * as Icons from 'react-feather'

import { Icon } from '.'

const LIST_ICONS = Object.keys(Icons)

export default {
  title: 'General/Icon',
  component: Icon,
}

export const Default = (args: any) => (
  <div className="block font-sans">
    <div>
      <Icon {...args} />
    </div>
  </div>
)

Default.args = {
  size: 16,
  className: '',
  type: 'Loader',
  stroke: 'black',
  strokeWidth: 2,
}

export const IconList = (args: any) => (
  <>
    <div className="font-sans text-xl bg-blue-100 p-5 mb-3 rounded-md">
      This icons uses react-feather from Feather Icons. For detail you can check
      it <a href="https://github.com/feathericons/react-feather">here</a> and{' '}
      <a href="https://feathericons.com/">here</a>
    </div>
    <div className="flex flex-wrap font-sans">
      {LIST_ICONS.map((icon) => (
        <div className="m-2 shadow-lg rounded-lg w-36 h-36 flex flex-col justify-center items-center">
          <Icon type={icon} key={icon} {...args} />
          <span className="mt-2">{icon}</span>
        </div>
      ))}
    </div>
  </>
)

IconList.args = {
  size: 16,
  stroke: 'black',
  strokeWidth: 2,
}
