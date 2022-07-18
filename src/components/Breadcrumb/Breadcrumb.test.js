import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from './Breadcrumb'

describe('#Breadcrumb', () => {
  it('should render breadcrumb correctly', async () => {
    render(
      <Breadcrumb data-testid="breadcrumb">
        <p> Item 1 </p>
        <p> Item 2 </p>
      </Breadcrumb>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('should render the crumbs correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <p className="test"> Item 1 </p>
        <p> Item 2 </p>
      </Breadcrumb>
    )
    expect(container.querySelector('p.test')).toHaveClass('test')
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})
