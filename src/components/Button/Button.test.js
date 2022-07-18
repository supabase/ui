import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

// this is a terrible hack until the Theme can be pulled in used in rendering the items.
const SIZES = ['tiny', 'small', 'medium', 'large', 'xlarge']
const EXPECTED_SIZE_RESULT = [
  'text-xs px-2.5 py-1',
  'text-sm leading-4 px-3 py-2',
  'text-sm px-4 py-2',
  'text-base px-4 py-2',
  'text-base px-6 py-3',
]

const TYPES = [
  'primary',
  'default',
  'secondary',
  'outline',
  'dashed',
  'link',
  'text',
]
const EXPECTED_TYPE_RESULT = [
  'bg-brand-fixed-800 hover:bg-brand-fixed-900 text-lo-contrast bordershadow-brand-fixed-800 hover:bordershadow-brand-fixed-1000',
  'bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 ',
  'bg-scale-1200 text-scale-100 hover:text-scale-800 focus-visible:text-scale-600 bordershadow-scale-1100 hover:bordershadow-scale-900 focus-visible:outline-scale-700',
  'bg-transparent bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-800 hover:dark:bordershadow-scale-900 focus-visible:outline-scale-700',
  'border border-dashed border-scale-700 hover:border-scale-900 bg-transparent focus-visible:outline-scale-700',
  'text-brand-1100 border border-transparent hover:bg-brand-400 border-opacity-0 bg-opacity-0 dark:bg-opacity-0 shadow-none focus-visible:outline-scale-700 text-xs px-2.5 py-1',
  'hover:bg-scale-500 shadow-none focus-visible:outline-scale-700 text-xs px-2.5 py-1',
]

describe('#Button', () => {
  it('should render button correctly', () => {
    const wrapper = render(<Button>Button</Button>)
    expect(wrapper.getByText('Button')).toBeInTheDocument()
    expect(() => wrapper.unmount()).not.toThrow()
  })

  it('should render different text', () => {
    const wrapper = render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
    wrapper.rerender(<Button>按钮</Button>)
    expect(screen.getByText('按钮')).toBeInTheDocument()
  })

  it('should ignore events when disabled', () => {
    const WrapperButton = () => {
      const [state, setState] = React.useState('state1')
      return (
        <Button disabled onClick={() => setState('state2')}>
          {state}
        </Button>
      )
    }
    render(<WrapperButton />)
    expect(screen.getByText('state1')).toBeInTheDocument()
    fireEvent.click(screen.getByText('state1'))
    expect(screen.getByText('state1')).toBeInTheDocument()
    expect(screen.queryByText('state2')).not.toBeInTheDocument()
  })

  it('should ignore events when loading', () => {
    const WrapperButton = () => {
      const [state, setState] = React.useState('state1')
      return (
        <Button loading onClick={() => setState('state2')}>
          {state}
        </Button>
      )
    }
    render(<WrapperButton />)
    fireEvent.click(screen.getByText('state1'))
    expect(screen.queryByText('state2')).not.toBeInTheDocument()
  })

  it('should have "w-full" class', async () => {
    render(<Button block>Button Block</Button>)
    expect(screen.queryByRole('button')).toHaveClass('w-full')
  })

  it.each(TYPES)('should have "btn--%s" class', (type) => {
    const index = TYPES.findIndex((t) => t === type)
    render(<Button type={type}>Button Variant</Button>)
    if (type !== 'text' && type !== 'link') {
      expect(screen.queryByRole('button')).toHaveClass(
        EXPECTED_TYPE_RESULT[index]
      )
    } else {
      expect(screen.queryByRole('button')).toHaveClass(
        EXPECTED_TYPE_RESULT[index]
      )
    }
  })

  it.each(SIZES)('should have "btn--%s" class', (size) => {
    render(<Button size={size}>Button</Button>)
    const index = SIZES.findIndex((t) => t === size)
    expect(screen.queryByRole('button')).toHaveClass(
      EXPECTED_SIZE_RESULT[index]
    )
  })
})
