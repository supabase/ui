import React, { useState } from 'react'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Menu } from '../Menu'
import { IconSettings, IconLogOut, IconChevronDown } from './../../index'
import Typography from '../Typography'
// import { AutoForm } from 'uniforms'

import { Dropdown } from './'
import { IconLogIn } from '../Icon/icons/IconLogIn'
import { Input } from '../Input'
import { IconSearch } from '../Icon/icons/IconSearch'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <div>
            <Typography.Text small>Signed in as </Typography.Text>
          </div>
          <div>
            <Typography.Text small strong>
              tom@example.com{' '}
            </Typography.Text>
          </div>
        </Dropdown.Misc>,
        <Divider light />,
        <Dropdown.Item>
          <Typography.Text small>Account</Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text small>Settings</Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item icon={<IconLogIn size="tiny" />}>
          <Typography.Text small>Log out</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

Default.args = {}

export const doNotcloseOverlay = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Menu>
          <Menu.Item doNotCloseOverlay icon={<IconSettings size="tiny" />}>
            This button will not close dropdown
          </Menu.Item>
          <Divider light />
          <Menu.Item>Something</Menu.Item>
          <Menu.Item>Something</Menu.Item>
        </Menu>,
        <Divider light />,
        <Dropdown.Item>
          <Button icon={<IconLogOut />}>Log out</Button>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

doNotcloseOverlay.args = {}

export const withCustomStyles = (args: any) => (
  <div
    style={{
      margin: '0 auto',
      minHeight: '420px',
      marginTop: '220px',
      marginLeft: '400px',
    }}
  >
    <Dropdown
      overlayStyle={{ minWidth: '500px' }}
      placement="bottomRight"
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Menu>
          <Menu.Item doNotCloseOverlay icon={<IconSettings size="tiny" />}>
            This button will not close dropdown
          </Menu.Item>
          <Divider light />
          <Menu.Item>Something</Menu.Item>
          <Menu.Item>Something</Menu.Item>
        </Menu>,
        <Divider light />,
        <Dropdown.Item>
          <Button type="default" icon={<IconLogOut />}>
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

withCustomStyles.args = {}

export const SearchList = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Input size="tiny" icon={<IconSearch />} autofocus={false} />
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        // <Menu>
        //   <Menu.Item icon={<IconSettings size="tiny" />}>Settings</Menu.Item>
        //   <Divider light />
        //   <Menu.Item>Something</Menu.Item>
        //   <Menu.Item>Something</Menu.Item>
        // </Menu>,
        // <Divider light />,
        <Dropdown.Item icon={<IconLogIn />}>
          <Typography.Text>Log out</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

SearchList.args = {}

export const Checkbox = (args: any) => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.Item icon={<IconSettings size="small" />}>
            <Typography.Text small>Account</Typography.Text>
          </Dropdown.Item>,
          <Dropdown.Item>
            <Typography.Text small>Settings</Typography.Text>
          </Dropdown.Item>,
          <Divider light />,
          <Dropdown.Checkbox checked={checked} onChange={setChecked}>
            <Typography.Text small>Show subtitles</Typography.Text>
          </Dropdown.Checkbox>,
        ]}
      >
        <Button type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}

export const Radio = (args: any) => {
  const [value, setValue] = useState('red')

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.RadioGroup value={value} onChange={setValue}>
            <Dropdown.Radio value={'red'}>
              <Typography.Text small>Red</Typography.Text>
            </Dropdown.Radio>

            <Dropdown.Radio value={'blue'}>
              <Typography.Text small>Blue</Typography.Text>
            </Dropdown.Radio>

            <Dropdown.Radio value={'green'}>
              <Typography.Text small>Green</Typography.Text>
            </Dropdown.Radio>
          </Dropdown.RadioGroup>,
        ]}
      >
        <Button type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}
