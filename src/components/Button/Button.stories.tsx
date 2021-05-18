import React, { useRef, useState } from 'react'

import { Button, Space, IconPackage, IconChevronRight } from './../../index'

export default {
  title: 'General/Button',
  component: Button,
}

export const Default = (args: any) => <Button {...args}>Button text</Button>
export const withStyles = (args: any) => <Button {...args}>Button text</Button>
export const withIcon = (args: any) => <Button {...args}>Button text</Button>
export const withIconRight = (args: any) => (
  <Button {...args}>Button text</Button>
)
export const withBlock = (args: any) => <Button {...args}>Button text</Button>
export const withOnlyIcon = (args: any) => <Button {...args} />
export const withOnlyLoading = (args: any) => <Button {...args} />
export const withLoadingCentered = (args: any) => (
  <Button {...args}>Loading icon is centered</Button>
)
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
export const allButtons = (args: any) => (
  <>
    <Space direction="vertical" size={6}>
      <Space>
        <Button {...args} size="tiny">
          Button text
        </Button>
        <Button {...args} size="tiny" type="secondary">
          Button text
        </Button>
        <Button {...args} size="tiny" type="default">
          Button text
        </Button>
        <Button {...args} size="tiny" type="link">
          Button text
        </Button>
        <Button {...args} size="tiny" type="text">
          Button text
        </Button>
        <Button {...args} size="tiny" type="dashed">
          Button text
        </Button>
        <Button {...args} size="tiny" type="outline">
          Button text
        </Button>
      </Space>

      <Space>
        <Button {...args} size="small">
          Button text
        </Button>
        <Button {...args} size="small" type="secondary">
          Button text
        </Button>
        <Button {...args} size="small" type="default">
          Button text
        </Button>
        <Button {...args} size="small" type="link">
          Button text
        </Button>
        <Button {...args} size="small" type="text">
          Button text
        </Button>
        <Button {...args} size="small" type="dashed">
          Button text
        </Button>
        <Button {...args} size="small" type="outline">
          Button text
        </Button>
      </Space>
      <Space>
        <Button {...args}>Button text</Button>
        <Button {...args} size="medium" type="secondary">
          Button text
        </Button>
        <Button {...args} size="medium" type="default">
          Button text
        </Button>
        <Button {...args} size="medium" type="link">
          Button text
        </Button>
        <Button {...args} size="medium" type="text">
          Button text
        </Button>
        <Button {...args} size="medium" type="dashed">
          Button text
        </Button>
        <Button {...args} size="medium" type="outline">
          Button text
        </Button>
      </Space>
      <Space>
        <Button {...args} size="large">
          Button text
        </Button>
        <Button {...args} size="large" type="secondary">
          Button text
        </Button>
        <Button {...args} size="large" type="default">
          Button text
        </Button>
        <Button {...args} size="large" type="link">
          Button text
        </Button>
        <Button {...args} size="large" type="text">
          Button text
        </Button>
        <Button {...args} size="large" type="dashed">
          Button text
        </Button>
        <Button {...args} size="large" type="outline">
          Button text
        </Button>
      </Space>
      <Space>
        <Button {...args} size="xlarge">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="secondary">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="default">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="link">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="text">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="dashed">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="outline">
          Button text
        </Button>
      </Space>
    </Space>
  </>
)

export const withCustomTag = (args: any) => (
  <Button {...args}>Button text</Button>
)

const icon = <IconPackage />

withIcon.args = {
  type: 'primary',
  icon: icon,
}

withIconRight.args = {
  type: 'primary',
  iconRight: <IconChevronRight strokeWidth={2} />,
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

withLoadingCentered.args = {
  loading: true,
  loadingCentered: true,
}

allButtons.args = {
  loading: false,
  danger: false,
}

withCustomTag.args = {
  as: 'span',
}
