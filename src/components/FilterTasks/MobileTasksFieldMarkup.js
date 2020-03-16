/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import Task from '../Task/Task';

const MobileTasksFieldMarkup = ({ tasks, title, tasksType, editTask }) => {
  return (
    <div>
      <div className={styles.arrowContainer}>
        <p className={styles.arrowText}>{title}</p>
      </div>

      {tasksType && (
        <ul className={styles.taskUl}>
          {tasks[tasksType].map(task => (
            <li key={task._id} className={styles.taskList}>
              <Task task={task} editTask={editTask} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
MobileTasksFieldMarkup.propTypes = {
  tasks: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  tasksType: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps)(MobileTasksFieldMarkup);
