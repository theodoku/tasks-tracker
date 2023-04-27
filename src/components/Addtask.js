import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const Addtask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setShowError(true);
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  const handleCloseError = () => setShowError(false);

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="taskInput">Task</label>
          <input
            type="text"
            placeholder="Add Task"
            id="taskInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="dayTimeInput">Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            id="dayTimeInput"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="setReminderInput">Set Reminder</label>
          <input
            type="checkbox"
            id="setReminderInput"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="Save Task" className="btn btn-block" />
        </div>
      </form>
      <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title error">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">Please add a task.</Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Addtask.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Addtask;
