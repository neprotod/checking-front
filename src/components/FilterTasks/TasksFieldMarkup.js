/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import Task from './Task';

const TasksFieldMarkup = ({
  tasks,
  name,
  onClickTasksToggle,
  title,
  arrowType,
  toggleType,
  tasksType,
  isCreateTaskFormOpenDesktop,
  editTask,
}) => {
  const isCreateTaskFormOpenDesktopStylesList = isCreateTaskFormOpenDesktop
    ? styles.taskListOpen
    : styles.taskList;
  return (
    <div>
      <div className={styles.arrowContainer}>
        <button
          type="button"
          name={name}
          className={styles.toggleButton}
          onClick={onClickTasksToggle}
        >
          <p className={styles.arrowText}>{title}</p>
          <p className={styles.arrowSvg}>{arrowType}</p>
        </button>
        <div className={styles.line} />
      </div>
      {toggleType && (
        <ul className={styles.taskUl}>
          {tasks[tasksType].map(task => (
            <li
              key={task._id}
              className={isCreateTaskFormOpenDesktopStylesList}
            >
              <Task task={task} editTask={editTask} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TasksFieldMarkup.propTypes = {
  tasks: PropTypes.shape().isRequired,
  arrowType: PropTypes.shape().isRequired,
  onClickTasksToggle: PropTypes.func.isRequired,
  isCreateTaskFormOpenDesktop: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tasksType: PropTypes.string.isRequired,
  toggleType: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps)(TasksFieldMarkup);
