/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// import DeleteTaskButton from '../DeleteTaskButton/index'

const Task = ({ task, editTask }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={() => editTask(task)} /* editTask повесить на кнопку edit */>
      <p>description: {task.description}</p>
      <p>title: {task.title}</p>
      {/* <DeleteTaskButton id={task.id}/> */}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
