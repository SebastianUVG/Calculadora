import { act, renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
  it('inicia con display en "0"', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  it('ingresa números correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('1'))
    act(() => result.current.handleNumberInput('2'))
    expect(result.current.display).toBe('12')
  })

  it('realiza suma correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('3'))
    act(() => result.current.handleOperation('+'))
    act(() => result.current.handleNumberInput('4'))
    act(() => result.current.calculate())
    expect(result.current.display).toBe('7')
  })

  it('realiza división por cero y muestra ERROR', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('8'))
    act(() => result.current.handleOperation('÷'))
    act(() => result.current.handleNumberInput('0'))
    act(() => result.current.calculate())
    expect(result.current.display).toBe('ERROR')
  })

  it('cambia el signo correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('5'))
    act(() => result.current.toggleSign())
    expect(result.current.display).toBe('-5')
    act(() => result.current.toggleSign())
    expect(result.current.display).toBe('5')
  })

  it('agrega punto decimal correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('3'))
    act(() => result.current.handleDecimal())
    act(() => result.current.handleNumberInput('1'))
    expect(result.current.display).toBe('3.1')
  })

  it('limpia el display', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumberInput('9'))
    act(() => result.current.clearDisplay())
    expect(result.current.display).toBe('0')
  })
})
