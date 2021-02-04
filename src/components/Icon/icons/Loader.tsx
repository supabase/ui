import React from 'react'
// @ts-ignore
import Icon from 'react-feather/dist/icons/loader'
import IconBase from '../IconBase'

function Loader(props: any) {
  return <IconBase icon={Icon} {...props} />
}

export default Loader
