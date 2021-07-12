import React from 'react'

import Select from '.'
import { IconBook } from '../../index'

export default {
  title: 'Data Input/SelectStyled',
  component: Select,
}

const { Option } = Select

const options = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
  { value: 'four', label: 'four' },
]

export const Default = (args: any) => (
  <Select label="Default listbox">
    {options.map((option) => {
      return (
        <Select.Option
          label={option.label}
          value={option.value}
          children={({ active, selected }: any) => {
            // console.log('selected', selected)
            // console.log('active', active)
            return <span>{option.label}</span>
          }}
        />
      )
    })}
  </Select>
)

// export const ErrorState = (args: any) => (
//   <Select
//     label="Choose a person"
//     descriptionText="Choose a person for this role"
//   >
//     {people.map((person) => {
//       return (
//         <Select.Option
//           value={person.value}
//           addOnBefore={({ active, selected }: any) => [
//             <img src={person.avatar} alt="" className="h-6 w-6 rounded-full" />,
//           ]}
//         >
//           {person.label}
//         </Select.Option>
//       )
//     })}
//   </Select>
// )

const people = [
  {
    value: 1,
    label: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 2,
    label: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 3,
    label: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    value: 4,
    label: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 5,
    label: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 6,
    label: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 7,
    label: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 8,
    label: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 9,
    label: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 10,
    label: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export const People = (args: any) => (
  <Select
    defaultValue={people[1].value}
    label="Choose a person"
    layout="horizontal"
    descriptionText="Choose a person for this role"
  >
    {people.map((person) => {
      return (
        <Select.Option
          value={person.value}
          label={person.label}
          addOnBefore={({ active, selected }: any) => [
            <img src={person.avatar} alt="" className="h-6 w-6 rounded-full" />,
          ]}
          children={({ active, selected }: any) => {
            // console.log('selected', selected)
            // console.log('active', active)
            return (
              <span className={'font-normal block truncate'}>
                {person.label}
              </span>
            )
          }}
        />
      )
    })}
  </Select>
)

People.args = {
  disabled: false,
  label: 'Label',
  layout: 'vertical',
  size: 'medium',
}

// export const Default = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

// export const withCheckboxes = (args: any) => <Select {...args} />

export const ErrorState = (args: any) => (
  <Select
    label="Choose a person"
    descriptionText="Choose a person for this role"
    error="I am an error"
  >
    {people.map((person) => {
      return (
        <Select.Option
          label={person.label}
          value={person.value}
          addOnBefore={({ active, selected }: any) => [
            <img src={person.avatar} alt="" className="h-6 w-6 rounded-full" />,
          ]}
        >
          {person.label}
        </Select.Option>
      )
    })}
  </Select>
)

// export const withOptionGroup = (args: any) => (
//   <Select {...args}>
//     <OptGroup label="languages">
//       <Option value="javascript">JavaScript</Option>
//       <Option value="typeScript">TypeScript</Option>
//     </OptGroup>
//     <OptGroup label="libaries">
//       <Option value="react">React</Option>
//     </OptGroup>
//   </Select>
// )

// export const withIcon = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

// export const withOptionLabel = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

// export const withBeforeAndAfterLabel = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

// export const withDescription = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

// export const size = (args: any) => (
//   <Select {...args}>
//     <Option value="javascript">JavaScript</Option>
//     <Option value="typeScript">TypeScript</Option>
//     <Option value="react">React</Option>
//   </Select>
// )

const data = ['England', 'Wales', 'Scotland', 'Ireland']
const icon = <IconBook type={'Book'} />

// Default.args = {
//   disabled: false,
//   label: 'Label',
//   className: 'font-sans',
//   layout: 'vertical',
//   children: [
//     <>
//       <Option value="javascript">JavaScript</Option>
//       <Option value="typeScript">TypeScript</Option>
//       <Option value="react">React</Option>
//     </>,
//   ],
// }

// withOptionGroup.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Input with an error message',
//   className: 'font-sans',
//   value: 'Value of input',
//   layout: 'vertical',
// }

// withCheckboxes.args = {
//   disabled: false,
//   checkboxes: data,
//   allowedValues: data,
//   className: 'font-sans',
//   layout: 'vertical',
// }

ErrorState.args = {
  // placeholder: 'Type text here ...',
  // disabled: false,
  // label: 'Input with an error message',
  // className: 'font-sans',
  // // value: 'Value of input',
  // error: 'Your password must be less than 4 characters.',
  // layout: 'vertical',
  // defaultValue:people[1].value,
  // defaultValue: people[1].value,
  label: 'Choose a person',
  descriptionText: 'Choose a person for this role',
}

// withIcon.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Input with an Icon',
//   className: 'font-sans',
//   value: 'Value of input',
//   icon: icon,
//   allowedValues: data,
//   layout: 'vertical',
// }

// withOptionLabel.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Input with an error message',
//   className: 'font-sans',
//   value: 'Value of input',
//   labelOptional: 'This is required',
//   allowedValues: data,
//   layout: 'vertical',
// }

// withBeforeAndAfterLabel.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Label',
//   beforeLabel: 'Before : ',
//   afterLabel: ' : After',
//   className: 'font-sans',
//   value: 'Value of input',
//   labelOptional: 'This is required',
//   allowedValues: data,
//   layout: 'vertical',
// }

// withDescription.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Input with an error message',
//   className: 'font-sans',
//   value: 'Value of input',
//   descriptionText: 'Make your password short and easy to guess',
//   allowedValues: data,
//   layout: 'vertical',
// }

// size.args = {
//   placeholder: 'Type text here ...',
//   disabled: false,
//   label: 'Input with a size selected',
//   value: 'Value of input',
//   descriptionText: 'Choose a different size and font and padding will change',
//   allowedValues: data,
//   layout: 'vertical',
//   size: 'tiny',
// }
