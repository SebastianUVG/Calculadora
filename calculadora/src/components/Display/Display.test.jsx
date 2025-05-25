import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Display from './Display'

describe('Display', () => {
  it('formats and displays value', () => {
    const { getByTestId } = render(<Display value="1234567890" />)
    expect(getByTestId('display').textContent).toBe('123456789') // máx 9 caracteres
  })

  it('shows ERROR if value is "ERROR"', () => {
    const { getByTestId } = render(<Display value="ERROR" />)
    expect(getByTestId('display').textContent).toBe('ERROR')
  })

  it('shows 0 if value is not a number', () => {
    const { getByTestId } = render(<Display value="invalid" />)
    expect(getByTestId('display').textContent).toBe('0')
  })
})
