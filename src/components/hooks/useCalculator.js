import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay]           = useState('0')
  const [storedValue, setStoredValue]   = useState(null)
  const [operation, setOperation]       = useState(null)
  const [waitingForOperand, setWaiting] = useState(false)

  /* ---------- Entrada de dígitos ---------- */
  const handleNumberInput = (num) => {
    if (waitingForOperand || display === '0') {
      setDisplay(num === '.' ? '0.' : num)
      setWaiting(false)
    } else {
      const newDisplay = display + num
      const maxDigits = newDisplay.startsWith('-') ? 8 : 9
      if (newDisplay.replace('-', '').replace('.', '').length > maxDigits) return
      setDisplay(newDisplay)
    }
  }


  /* ---------- Operadores (+ – × ÷ mod) ---------- */
  const handleOperation = (op) => {
  
    if (operation && !waitingForOperand) {
      const result = _compute()
      setDisplay(String(result))
      setStoredValue(result)
    } else {
      setStoredValue(parseFloat(display))
    }
    setOperation(op)           
    setWaiting(true)           
  }

  /* ---------- Porcentaje ---------- */

  const handlePercent = () => {
    const percent = parseFloat(display) / 100
    setDisplay(String(percent))
  
  }

  /* ---------- = ---------- */
  const handleEquals = () => {
    if (operation && storedValue !== null) {
      const result = _compute()
      setDisplay(String(result))
      // Listo para encadenar más operaciones
      setStoredValue(null)
      setOperation(null)
      setWaiting(true)
    }
  }

  /* ---------- Lógica de cálculo ---------- */
  const _compute = () => {
    const current = parseFloat(display)
    let result

    switch (operation) {
      case '+':  result = storedValue + current; break
      case '-':  result = storedValue - current; break
      case '×':  result = storedValue * current; break
      case '÷':  result = current === 0 ? 'ERROR' : storedValue / current; break
      case 'mod':result = current === 0 ? 'ERROR' : storedValue % current; break
      default:   return current
    }

    if (result === 'ERROR') 
      return result
    if (result < 0) 
      return 'ERROR'
    const resultStr = String(result)

    if (resultStr.replace('-', '').length <= 9) 
      return resultStr
    

    // Redondear y recortar si es decimal
    if (Number.isFinite(result) && !Number.isInteger(result)) {
      let rounded = result.toFixed(8) // usar hasta 8 decimales 
      const trimmed = rounded.slice(0, 9)
      return trimmed
    }

    // Si es entero muy largo, mostrar ERROR
    return 'ERROR'
  }


  /* ---------- Utilidades ---------- */
  const clearDisplay = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaiting(false)
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaiting(false)
    } else if (
      !display.includes('.') &&
      display.replace('-', '').length < 9
    ) {
      setDisplay(display + '.')
    }
  }


  const toggleSign = () => {
    if (display === '0') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display.length <= 8) {
      setDisplay('-' + display)
    }
  }

  
  return {
    display,
    handleNumberInput,
    handleOperation, 
    handlePercent,   
    calculate : handleEquals,
    clearDisplay,
    handleDecimal,
    toggleSign
  }
}
