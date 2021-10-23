import React from from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('#Breadcrumbs', () => {
  it('should render breadcrumbs correctly', async () => {
    render(
      <Breadcrumbs data-testid="breadcrumbs">
        <p> Item 1 </p>
        <p> Item 2 </p>
      </Breadcrumbs>
    )
    expect(screen.queryByTestId('breadcrumbs')).toBeInTheDocument()
  })

  it('should have "breadcrumbs--item" class', () => {
    render(
      <Breadcrumbs data-testid="breadcrumbs">
        <p> Item 1 </p>
        <p> Item 2 </p>
      </Breadcrumbs>
    )
    expect(screen.queryByTestId('breadcrumbs')).toHaveClass('.sbui-breadcrumbs--item ')
  })
})
