import PropTypes from 'prop-types';
import './Display.css'; // Archivo de estilos local

const Display = ({ value }) => {
  return (
    <div className="display-container">
      {value}
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.number.isRequired
};

export default Display;