import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <div>
      <p>description: {task.description}</p>
      <p>title: {task.title}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape().isRequired,
};

export default Task;
