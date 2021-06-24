import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

const SIZES = ['tiny', 'small', 'medium', 'large', 'xlarge']
const TYPES = [
  'primary',
  'default',
  'secondary',
  'outline',
  'dashed',
  'link',
  'text',
]

describe('#Button', () => {
  it('should render button correctly', async () => {
    render(<Button>Button</Button>)
    expect(screen.queryByText('Button')).toBeInTheDocument()
  })

  it('should have "w-full" class', async () => {
    render(<Button block>Button Block</Button>)
    expect(screen.queryByRole('button')).toHaveClass(
      'sbui-btn sbui-btn-primary sbui-btn--w-full sbui-btn-container--shadow sbui-btn--tiny'
    )
  })

  it.each(TYPES)('should have "btn--%s" class', (type) => {
    render(<Button type={type}>Button Variant</Button>)

    if (type !== 'text' && type !== 'link') {
      expect(screen.queryByRole('button')).toHaveClass(
        `sbui-btn sbui-btn-${type} sbui-btn-container--shadow sbui-btn--tiny`
      )
    } else {
      expect(screen.queryByRole('button')).toHaveClass(
        `sbui-btn sbui-btn-${type} sbui-btn--tiny`
      )
    }
  })

  it.each(SIZES)('should have "btn--%s" class', (size) => {
    render(<Button size={size}>Button</Button>)
    expect(screen.queryByRole('button')).toHaveClass(
      `sbui-btn sbui-btn-primary sbui-btn-container--shadow sbui-btn--${size}`
    )
  })
})
