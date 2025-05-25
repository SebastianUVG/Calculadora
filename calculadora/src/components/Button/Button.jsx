const Button = ({ onClick, children, type = 'number' }) => {
  const buttonClass = `btn ${type}`
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      data-testid={`button-${children}`}
    >
      {children}
    </button>
    
  )
}

export default Button