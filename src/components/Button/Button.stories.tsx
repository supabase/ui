import React, { useRef, useState } from 'react'

import { Button } from '.'
import { Icon } from '../Icon'
import { Space } from '../Space'

export default {
  title: 'General/Button',
  component: Button,
}

export const all = (args: any) => (
  <>
    <Space direction="vertical" size={6}>
      <Space>
        <Button size="tiny">Button text</Button>
        <Button size="tiny" type="secondary">
          Button text
        </Button>
        <Button size="tiny" type="default">
          Button text
        </Button>
        <Button size="tiny" type="link">
          Button text
        </Button>
        <Button size="tiny" type="text">
          Button text
        </Button>
        <Button size="tiny" type="dashed">
          Button text
        </Button>
        <Button size="tiny" type="outline">
          Button text
        </Button>
      </Space>

      <Space>
        <Button size="small">Button text</Button>
        <Button size="small" type="secondary">
          Button text
        </Button>
        <Button size="small" type="default">
          Button text
        </Button>
        <Button size="small" type="link">
          Button text
        </Button>
        <Button size="small" type="text">
          Button text
        </Button>
        <Button size="small" type="dashed">
          Button text
        </Button>
        <Button size="small" type="outline">
          Button text
        </Button>
      </Space>

      <Space>
        <Button>Button text</Button>
        <Button size="medium" type="secondary">
          Button text
        </Button>
        <Button size="medium" type="default">
          Button text
        </Button>
        <Button size="medium" type="link">
          Button text
        </Button>
        <Button size="medium" type="text">
          Button text
        </Button>
        <Button size="medium" type="dashed">
          Button text
        </Button>
        <Button size="medium" type="outline">
          Button text
        </Button>
      </Space>

      <Space>
        <Button size="large">Button text</Button>
        <Button size="large" type="secondary">
          Button text
        </Button>
        <Button size="large" type="default">
          Button text
        </Button>
        <Button size="large" type="link">
          Button text
        </Button>
        <Button size="large" type="text">
          Button text
        </Button>
        <Button size="large" type="dashed">
          Button text
        </Button>
        <Button size="large" type="outline">
          Button text
        </Button>
      </Space>
      <Space>
        <Button size="xlarge">Button text</Button>
        <Button size="xlarge" type="secondary">
          Button text
        </Button>
        <Button size="xlarge" type="default">
          Button text
        </Button>
        <Button size="xlarge" type="link">
          Button text
        </Button>
        <Button size="xlarge" type="text">
          Button text
        </Button>
        <Button size="xlarge" type="dashed">
          Button text
        </Button>
        <Button size="xlarge" type="outline">
          Button text
        </Button>
      </Space>
    </Space>
  </>
)
export const Default = (args: any) => <Button>Button text</Button>
export const withStyles = (args: any) => <Button>Button text</Button>
export const withIcon = (args: any) => <Button>Button text</Button>
export const withIconRight = (args: any) => (
  <Button {...args}>Button text</Button>
)
export const withBlock = (args: any) => <Button {...args}>Button text</Button>
export const withOnlyIcon = (args: any) => <Button {...args} />
export const withOnlyLoading = (args: any) => <Button {...args} />
export const withRef = () => {
  const buttonRef = useRef(null)
  const [msg, setMsg] = useState('Click button to console.log Ref')

  function onClick() {
    const message = `container: ${buttonRef?.current.container} button:${buttonRef?.current.button}  `
    setMsg(message)
    console.log(message)
  }

  return (
    <>
      <Button ref={buttonRef} onClick={onClick}>
        Button with forwardRef
      </Button>

      <p style={{ color: '#666666' }}>{msg}</p>
    </>
  )
}

const icon = <Icon type={'Package'} />

withIcon.args = {
  type: 'primary',
  icon: icon,
}

withIconRight.args = {
  type: 'primary',
  iconRight: <Icon type={'ChevronRight'} strokeWidth={2} />,
}

withStyles.args = {
  type: 'primary',
  style: { backgroundColor: 'red', color: 'yellow' },
}

withBlock.args = {
  type: 'primary',
  block: true,
}

withOnlyIcon.args = {
  icon: icon,
}

withOnlyLoading.args = {
  loading: true,
}
