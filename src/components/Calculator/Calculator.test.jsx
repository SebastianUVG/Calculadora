import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Calculator from './Calculator'

const clickButton = (getByTestId, label) => fireEvent.click(getByTestId(`button-${label}`))

describe('Calculator', () => {
  it('performs addition correctly', () => {
    const { getByTestId } = render(<Calculator />)
    clickButton(getByTestId, '1')
    clickButton(getByTestId, '+')
    clickButton(getByTestId, '2')
    clickButton(getByTestId, '=')
    expect(getByTestId('display').textContent).toBe('3')
  })

  it('performs division by zero and shows ERROR', () => {
    const { getByTestId } = render(<Calculator />)
    clickButton(getByTestId, '8')
    clickButton(getByTestId, '÷')
    clickButton(getByTestId, '0')
    clickButton(getByTestId, '=')
    expect(getByTestId('display').textContent).toBe('ERROR')
  })

  it('clears the display', () => {
    const { getByTestId } = render(<Calculator />)
    clickButton(getByTestId, '7')
    clickButton(getByTestId, 'C')
    expect(getByTestId('display').textContent).toBe('0')
  })

  it('toggles sign correctly', () => {
    const { getByTestId } = render(<Calculator />)
    clickButton(getByTestId, '5')
    clickButton(getByTestId, '+/-')
    expect(getByTestId('display').textContent).toBe('-5')
    clickButton(getByTestId, '+/-')
    expect(getByTestId('display').textContent).toBe('5')
  })
})
