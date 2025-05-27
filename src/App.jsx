import { Calculator } from './components/Calculator/Calculator'
import './App.css' // Importa tus estilos

function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: 'center', color: '#ffffff' }}>Calculadora</h1>
      <Calculator />
    </div>
  )
}

export default App