import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => (
  <button type="button" onClick={onClick} style={{ backgroundColor: color }} className="btn">
    {text}
  </button>

);

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '',
  text: '',
  onClick: '',
};
export default Button;
