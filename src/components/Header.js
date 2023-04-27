import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, showAdd, setShowAdd }) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'close' : 'Add'}
          onClick={() => setShowAdd(!showAdd)}
        />
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showAdd: PropTypes.bool.isRequired,
  setShowAdd: PropTypes.func.isRequired,
};

export default Header;
