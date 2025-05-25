import './Display.css'

const Display = ({ value }) => {
  // Formatear el valor para mostrar
  const formatValue = (val) => {
    if (val === 'ERROR') return val
    const num = parseFloat(val)
    if (isNaN(num)) return '0'
    
    // Mostrar máximo 9 caracteres (incluyendo signo y punto)
    let str = String(val)
    if (str.length > 9) {
      str = str.slice(0, 9)
    }
    return str
  }

  return (
    <div className="display" data-testid="display">
      {formatValue(value)}
    </div>
  )
}

export default Display