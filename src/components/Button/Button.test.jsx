import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders with the correct children and class', () => {
    const { getByTestId } = render(<Button type="operator">+</Button>)
    const button = getByTestId('button-+')
    expect(button).not.toBeNull()

    expect(button).toHaveClass('btn operator')
    expect(button.textContent).toBe('+')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(<Button onClick={handleClick}>1</Button>)
    fireEvent.click(getByTestId('button-1'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
