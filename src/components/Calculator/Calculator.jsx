import { useCalculator } from '../hooks/useCalculator'
import Display from '../Display/Display'
import Button from '../Button/Button'

export const Calculator = () => {
  const { 
    display,
    handleNumberInput,
    handleOperation, 
    handlePercent,   
    calculate : handleEquals,
    clearDisplay,
    handleDecimal,
    toggleSign
  } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      
      <div className="keypad">
        {/* Fila 1 */}
        <Button onClick={clearDisplay}>C</Button>
        <Button onClick={toggleSign}>+/-</Button>
        <Button onClick={handlePercent}>%</Button>
        <Button onClick={() => handleOperation('÷')}>÷</Button>
        
        {/* Fila 2 */}
        <Button onClick={() => handleNumberInput('7')}>7</Button>
        <Button onClick={() => handleNumberInput('8')}>8</Button>
        <Button onClick={() => handleNumberInput('9')}>9</Button>
        <Button onClick={() => handleOperation('×')}>×</Button>
        
        {/* Fila 3 */}
        <Button onClick={() => handleNumberInput('4')}>4</Button>
        <Button onClick={() => handleNumberInput('5')}>5</Button>
        <Button onClick={() => handleNumberInput('6')}>6</Button>
        <Button onClick={() => handleOperation('-')}>-</Button>
        
        {/* Fila 4 */}
        <Button onClick={() => handleNumberInput('1')}>1</Button>
        <Button onClick={() => handleNumberInput('2')}>2</Button>
        <Button onClick={() => handleNumberInput('3')}>3</Button>
        <Button onClick={() => handleOperation('+')}>+</Button>
        
        {/* Fila 5 */}
        <Button onClick={() => handleNumberInput('0')}>0</Button>
        <Button onClick={handleDecimal}>.</Button>
        <Button onClick={() => handleOperation('mod')}>MOD</Button>
        <Button onClick={handleEquals}>=</Button>
      </div>
    </div>
  )
}

export default Calculator