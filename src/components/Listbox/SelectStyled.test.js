import React from 'react'
import { render, screen } from '@testing-library/react'
import Select from './Listbox2'

describe('#Select', () => {
  it('should render select correctly', async () => {
    render(
      <Select label="Default listbox">
        <option>1</option>
        <option>2</option>
      </Select>
    )
    expect(screen.queryByText('Default listbox')).toBeInTheDocument()
  })

  it('should have "form-select--error" class', () => {
    render(
      <Select isError error="I am an error">
        <option>1</option>
        <option>2</option>
      </Select>
    )
    expect(screen.queryByText('I am an error')).toBeInTheDocument()
  })
})
