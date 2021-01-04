import React, { useState } from 'react'
// @ts-ignore
import { Input, Checkbox, Button, Icon, Space, Typography } from './../../index'

import './Auth.css'

function Auth({ className, style, client, children, authView, ...props }: any) {
  const [view, setView] = useState(authView)
  const [toggleMagicLink, setToggleMagicLink] = useState(false)

  const styleGoogle = {
    backgroundColor: 'white',
    color: '#3d3d3d',
    border: '1px solid #fefefe',
  }

  const styleFacebook = {
    backgroundColor: '#4267B2',
  }

  const styleTwitter = {
    backgroundColor: '#1DA1F2',
  }

  const styleGitlab = {
    backgroundColor: '#FC6D27',
  }

  const styleGithub = {
    backgroundColor: '#333',
  }

  const styleBitbucket = {
    backgroundColor: '#205081',
  }

  function onMagicLinkToggle(e: any) {
    // if (onChange) onChange()
    return setToggleMagicLink(!toggleMagicLink)
  }

  // google
  // github
  // gitlab
  // bitbucket

  // magic link

  // coming soon
  // facebook
  // twitter

  const googleIcon = <Icon stroke={'#666666'} className={''} type={'Package'} />

  let containerClasses = ['sbui-auth-container']
  if(className) {
    containerClasses.push(className)
  }

  return (
    <div className={containerClasses.join(' ')} style={style}>
      <Space size={4} direction={'vertical'}>
        <Space size={4} direction={'vertical'}>
          <span>Sign in with:</span>
          <Space size={2} direction={'vertical'}>
            <Button block shadow style={styleGoogle} icon={googleIcon}>
              Google
            </Button>
            {/* <Button block shadow style={styleFacebook} icon={googleIcon}>Facebook</Button> */}
            {/* <Button block shadow style={styleTwitter} icon={googleIcon}>Twitter</Button> */}
            <Button block shadow style={styleGithub} icon={googleIcon}>
              Github
            </Button>
            <Button block shadow style={styleGitlab} icon={googleIcon}>
              Gitlab
            </Button>
            <Button block shadow style={styleBitbucket} icon={googleIcon}>
              Bitbucket
            </Button>
          </Space>
        </Space>
        <div>or</div>

        {!toggleMagicLink ? (
          <div>
            <Space size={6} direction={'vertical'}>
              <Space size={3} direction={'vertical'}>
                <Input label="Email address" icon={<Icon size={21} stroke={'#666666'} type="Mail"/>}/>
                <Input label="Password" type="password" icon={<Icon size={21} stroke={'#666666'} type="Key"/>}/>
              </Space>
              
              <Checkbox label="Remember my password" name="remember_password" id="remember_password"/>


              <label onClick={onMagicLinkToggle}>Sign in with magic link</label>
            </Space>
          </div>
        ) : (
          <div>
            <Space size={4} direction={'vertical'}>
              <Space size={2} direction={'vertical'}>
                <Input label="Email address" />
                <Button block>Send email</Button>
              </Space>
              <label onClick={onMagicLinkToggle}>
                Sign in with NORMAL EMAIL
              </label>
            </Space>
          </div>
        )}
      </Space>
    </div>
  )
}

export default Auth
