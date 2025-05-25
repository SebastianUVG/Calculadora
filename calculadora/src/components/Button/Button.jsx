import PropTypes from 'prop-types';
import './Button.css'; // Archivo de estilos local

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="custom-button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;