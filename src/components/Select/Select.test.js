import React from 'react'
import { render, screen } from '@testing-library/react'
import theme from '../../lib/theme/defaultTheme'
import { styleClassString } from '../../lib/theme/styleHandler'
import Select from './Select'

describe('#Select', () => {
  it('should render select correctly', async () => {
    render(
      <Select data-testid="form-select">
        <option>1</option>
        <option>2</option>
      </Select>
    )
    expect(screen.queryByTestId('form-select')).toBeInTheDocument()
  })

  it('should have "form-select--error" class', () => {
    render(
      <Select error data-testid="form-select">
        <option>1</option>
        <option>2</option>
      </Select>
    )
    const exepectedClass = styleClassString(theme.select.variants.error)
    expect(screen.queryByTestId('form-select')).toHaveClass(exepectedClass)
  })
})
