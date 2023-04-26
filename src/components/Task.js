import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => (
  <div className={`task ${task.reminder ? 'reminder' : ''}`}>
    <h3 onDoubleClick={() => onToggle(task.id)}>
      {task.text}
      {' '}
      <FaTimes
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => onDelete(task.id)}
      />
    </h3>
    <p>{task.day}</p>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    reminder: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
