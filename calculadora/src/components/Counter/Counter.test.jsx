import { render,  fireEvent } from '@testing-library/react'
import Counter from './Counter'
import { expect, test } from 'vitest'

test('incrementa el contador correctamente', async () => {
  const { getByText } = render(<Counter />)
  
  expect(getByText('0')).toBeDefined()
  
  await fireEvent.click(getByText('Sumar'))
  
  // Verificación directa del texto
  expect(getByText('1')).toBeDefined()
  
  // Alternativa más robusta:
  const counterElement = getByText(/(0|1)/) // Regex para 0 o 1
  expect(counterElement.textContent).toBe('1')
})