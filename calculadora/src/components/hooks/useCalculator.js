import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleNumberInput = (num) => {
    const maxDigits = display.startsWith('-') ? 8 : 9
    if (display.replace('-', '').replace('.', '').length >= maxDigits) return
    
    if (waitingForOperand || display === '0') {
      setDisplay(num === '.' ? '0.' : num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperation = (op) => {
    if (operation && !waitingForOperand) {
      const result = calculate()
      setDisplay(String(result))
      setStoredValue(result)
    } else {
      setStoredValue(parseFloat(display))
    }
    setOperation(op)
    setWaitingForOperand(true)
  }

  const calculate = () => {
    const current = parseFloat(display)
    let result
    
    switch(operation) {
      case '+': result = storedValue + current; break
      case '-': result = storedValue - current; break
      case '×': result = storedValue * current; break
      case '÷': result = current === 0 ? 'ERROR' : storedValue / current; break
      case '%': result = current === 0 ? 'ERROR' : storedValue % current; break
      default: return current
    }

    // Validación de longitud (9 caracteres máximo incluyendo signo y punto)
    const resultStr = String(result)
    if (resultStr.replace('-', '').length > 9) return 'ERROR'
    
    // Validación de rango numérico absoluto
    if (Math.abs(result) > 999999999) return 'ERROR'
    
    return result
  }

  const clearDisplay = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const handleEquals = () => {
    if (operation && storedValue !== null) {
      const result = calculate()
      setDisplay(String(result))
      setStoredValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }
    if (!display.includes('.')) {
      if (display.replace('-', '').length < 9) {
        setDisplay(display + '.')
      }
    }
  }

  const toggleSign = () => {
    if (display === '0') return
    
    if (display.startsWith('-')) {
      // Convertir a positivo
      const positiveValue = display.slice(1)
      setDisplay(positiveValue === '0' ? '0' : positiveValue)
    } else {
      // Convertir a negativo (solo si no excede el límite)
      if (display.length <= 8) {
        setDisplay(`-${display}`)
      }
    }
  }

  return { 
    display, 
    handleNumberInput, 
    handleOperation,
    calculate: handleEquals,
    clearDisplay,
    handleDecimal,
    toggleSign
  }
}