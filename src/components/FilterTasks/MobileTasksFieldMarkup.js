/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import Task from '../Task/index';
import { ReactComponent as NoTasksIcon } from '../../materials/svg/noTasks.svg';

const MobileTasksFieldMarkup = ({
  tasks,
  title,
  tasksType,
  editTask,
  deleteTask,
  isRender,
  burned,
}) => {
  return (
    <div>
      <div className={styles.arrowContainer}>
        <p className={styles.arrowText}>{title}</p>
      </div>

      {tasksType && (
        <ul className={styles.taskUl}>
          {tasks[tasksType].length > 0 ? (
            tasks[tasksType].map(task => (
              <li key={task._id} className={styles.taskList}>
                <Task
                  task={task}
                  editTask={editTask}
                  deleteTask={deleteTask}
                  isRender={isRender}
                  burned={burned}
                />
              </li>
            ))
          ) : (
            <p className={styles.noTasks}>
              <NoTasksIcon />
              <span className={styles.noTasksTitle}>No tasks</span>
              <span>Click "+" to add new task</span>
            </p>
          )}
        </ul>
      )}
    </div>
  );
};

MobileTasksFieldMarkup.defaultProps = {
  burned: false,
};

MobileTasksFieldMarkup.propTypes = {
  tasks: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  tasksType: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  isRender: PropTypes.func.isRequired,
  burned: PropTypes.bool,
};

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps)(MobileTasksFieldMarkup);
