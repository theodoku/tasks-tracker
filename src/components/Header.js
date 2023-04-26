import PropTypes from 'prop-types';
import Button from './Button';

const onClick = () => {
  console.log('click');
};

const Header = ({ title }) => (
  <>
    <div className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </div>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
