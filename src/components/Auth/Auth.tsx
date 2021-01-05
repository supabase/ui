import React, { useState } from 'react'
// @ts-ignore
import { Input, Checkbox, Button, Icon, Space, Typography } from './../../index'
import * as SocialIcons from './Icons'
import './Auth.css'

const VIEWS: any = {
  MAIN: 'main',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
}

enum Providers {
  'facebook',
  'google',
  'github',
  'gitlab',
  'bitbucket',
}

interface Props {
  className?: any
  style?: any
  client?: any
  children?: any
  authView?: any
  socialLayout?: 'horizontal' | 'vertical'
  socialColors?: boolean
  socialButtonSize?: 'small' | 'normal' | 'large'
  providers?: Providers[]
  verticalSocialLayout?: any
  view?: 'main' | 'forgotten_password' | 'magic_link'
}

function Auth({
  className,
  style,
  client,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize,
  providers,
  view = 'main'
}: Props) {
  const [authView, setAuthView] = useState(view)

  const verticalSocialLayout = socialLayout === 'vertical' ? true : false
  
  let containerClasses = ['sbui-auth-container']
  if (className) {
    containerClasses.push(className)
  }
  const Container = (props: any) => (
    <div className={containerClasses.join(' ')} style={style}>
      <Space size={8} direction={'vertical'}>
        <SocialAuth
          client={client}
          verticalSocialLayout={verticalSocialLayout}
          providers={providers}
          socialLayout={socialLayout}
          socialButtonSize={socialButtonSize}
          socialColors={socialColors}
        />
        {props.children}
      </Space>
    </div>
  )

  switch (authView) {
    case VIEWS.MAIN:
      return (
        <Container>
          <EmailAuth client={client} setAuthView={setAuthView} />
        </Container>
      )
      break
    case VIEWS.FORGOTTEN_PASSWORD:
      return (
        <Container>
          <ForgottenPassword client={client} setAuthView={setAuthView} />
        </Container>
      )
      break
    case VIEWS.MAGIC_LINK:
      return (
        <Container>
          <MagicLink client={client} setAuthView={setAuthView} />
        </Container>
      )
      break
    default:
      break
  }
}

function SocialAuth({
  className,
  style,
  client,
  children,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize,
  providers,
  verticalSocialLayout,
  ...props
}: Props) {
  const buttonStyles: any = {
    google: {
      backgroundColor: '#ce4430',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#1DA1F2',
    },
    gitlab: {
      backgroundColor: '#FC6D27',
    },
    github: {
      backgroundColor: '#333',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white',
    },
  }

  return (
    <Space size={8} direction={'vertical'}>
      {providers && providers.length > 0 && (
        <React.Fragment>
          <Space size={4} direction={'vertical'}>
            <Typography.Text type="secondary" strong>
              Sign in with:
            </Typography.Text>
            <Space size={2} direction={socialLayout}>
              {providers.map((provider) => {
                // @ts-ignore
                const TheIcon = SocialIcons[provider]

                return (
                  <div style={!verticalSocialLayout ? { flexGrow: 1 } : {}}>
                    <Button
                      block
                      type="default"
                      shadow
                      size={socialButtonSize}
                      style={socialColors ? buttonStyles[provider] : {}}
                      icon={<TheIcon />}
                    >
                      {verticalSocialLayout && 'Sign up with ' + provider}
                    </Button>
                  </div>
                )
              })}
            </Space>
          </Space>
          <Space size={8} style={{ alignItems: 'center' }}>
            <div
              style={{ flexGrow: 1, borderBottom: '1px solid #666666' }}
            ></div>
            <Typography.Text type="secondary">or continue with</Typography.Text>
            <div
              style={{ flexGrow: 1, borderBottom: '1px solid #666666' }}
            ></div>
          </Space>
        </React.Fragment>
      )}
    </Space>
  )
}

function EmailAuth({ setAuthView }: any) {
  return (
    <div>
      <Space size={6} direction={'vertical'}>
        <Space size={3} direction={'vertical'}>
          <Input
            label="Email address"
            icon={<Icon size={21} stroke={'#666666'} type="Mail" />}
          />
          <Input
            label="Password"
            type="password"
            icon={<Icon size={21} stroke={'#666666'} type="Key" />}
          />
        </Space>
        <div>
          <Space style={{ justifyContent: 'space-between' }}>
            <Checkbox label="Remember me" name="remember_me" id="remember_me" />
            <Typography.Link
              onClick={() => setAuthView(VIEWS.FORGOTTEN_PASSWORD)}
            >
              Forgot your password?
            </Typography.Link>
          </Space>
          <Button
            type="primary"
            block
            size="large"
            icon={<Icon size={21} type="Lock" color="currentColor" />}
          >
            Sign up
          </Button>
        </div>
        <Typography.Link onClick={() => setAuthView(VIEWS.MAGIC_LINK)}>
          Sign in with magic link
        </Typography.Link>
      </Space>
    </div>
  )
}

function MagicLink({ setAuthView }: any) {
  return (
    <div>
      <Space size={4} direction={'vertical'}>
        <Space size={2} direction={'vertical'}>
          <Space size={3} direction={'vertical'}>
            <Input
              label="Email address"
              placeholder="Your email address"
              icon={<Icon size={21} stroke={'#666666'} type="Mail" />}
            />
            <Button block size="large" icon={<Icon size={21} type="Inbox" />}>
              Send magic link
            </Button>
          </Space>
        </Space>
        <Typography.Link onClick={() => setAuthView(VIEWS.MAIN)}>
          Go back to sign up
        </Typography.Link>
      </Space>
    </div>
  )
}

function ForgottenPassword({ setAuthView }: any) {
  return (
    <div>
      <Space size={4} direction={'vertical'}>
        <Space size={2} direction={'vertical'}>
          <Space size={3} direction={'vertical'}>
            <Input
              label="Email address"
              placeholder="Your email address"
              icon={<Icon size={21} stroke={'#666666'} type="Mail" />}
            />
            <Button block size="large" icon={<Icon size={21} type="Inbox" />}>
              Send reset password instructions
            </Button>
          </Space>
        </Space>
        <Typography.Link onClick={() => setAuthView(VIEWS.MAIN)}>
          Go back to sign up
        </Typography.Link>
      </Space>
    </div>
  )
}

Auth.ForgottenPassword = ForgottenPassword
Auth.MagicLink = MagicLink

export default Auth
