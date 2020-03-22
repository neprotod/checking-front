import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import styles from './Task.module.css';
import API from '../../services/api';

const Task = ({ task, editTask, deleteTask, isRender, burned }) => {
  const renderMainPage = id => {
    const doneChange = !task.done;
    API.updateTask(id, { done: doneChange });
    isRender();
  };

  // eslint-disable-next-line no-nested-ternary
  const taskState = task.done ? 'done' : burned ? 'burned' : 'undone';
  const btnStyle = `${taskState}Btn`;
  const iconStyle = `${taskState}Icon`;

  return (
    <div className={styles.block}>
      <div
        className={styles.headerTask}
        style={{
          backgroundColor: task.role.length > 0 ? task.role[0].color : 'grey',
        }}
      >
        <span className={styles.role}>
          {task.role.length > 0 ? task.role[0].name : 'None'}
        </span>
        <span
          style={{ color: task.priority[0].name === '1' ? 'red' : 'grey' }}
          className={styles.priorityTask}
        >
          {task.priority[0].name}
        </span>
      </div>
      <div className={styles.bodyTask}>
        <p className={styles.title}>{task.title}</p>
        <p>{task.description}</p>
      </div>
      <div className={styles.footerTask}>
        <div className={styles.date}>
          <span className={styles.span}>
            {dateFormat(task.start_date, 'mmm dd')}
          </span>
          <span>
            {task.start_date.slice(11, 16)} - {task.end_date.slice(11, 16)}
          </span>
        </div>
        <div className={styles.taskControls}>
          <button
            className={styles.btnEdit}
            onClick={() => editTask(task)}
            type="button"
          >
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="#939393"
                d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
              />
            </svg>
          </button>

          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => deleteTask(task._id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="#939393"
                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
              />
            </svg>
          </button>

          <button
            className={styles[btnStyle]}
            onClick={() => renderMainPage(task._id)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
              <path
                className={styles[iconStyle]}
                d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Task.defaultProps = {
  burned: false,
};

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  isRender: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  burned: PropTypes.bool,
};

export default Task;
