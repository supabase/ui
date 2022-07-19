import React from 'react'
import { Card } from './'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args: any) => (
  <Card {...args}>
    <p>Card content</p> 
    <p>Card content</p> 
    <p>Card content</p> 
  </Card>
)

export const withCover = (args: any) => (
  <Card {...args}>
    <h4 className='text-scale-1200 font-bold'>This is Card with Cover</h4>
    <p>Description</p>
  </Card>
)

export const withMeta = (args: any) => (
  <Card {...args}>
    <Card.Meta title={'This is Meta card title'} description={'This is Meta card description'}/>
  </Card>
)

export const withHover = (args: any) => (
  <Card {...args}>
    <Card.Meta title={'This is Meta card title'} description={'This is Meta card description'}/>
  </Card>
) 

Default.args = {
  title: 'This is Card Title',
  titleExtra: <a href='#' className='underline text-sm'>Learn more</a>,
}

withCover.args = {
  cover: (
    <img
      className="h-64 w-full object-cover"
      src={'https://images.unsplash.com/photo-1557149289-0b6e90634e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'}
      alt={'title'}
    />
  ),
}

withMeta.args = {
  title: 'Title is here',
  cover: (
    <img
      className="h-64 w-full object-cover"
      src={'https://images.unsplash.com/photo-1557149289-0b6e90634e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'}
      alt={'title'}
    />
  ),
}

withHover.args = {
  title: 'This card can hover',
  hoverable: true
}
