import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import styles from './Task.module.css';
import API from '../../services/api';

const Task = ({ task, editTask, isRender }) => {
  const renderMainPage = id => {
    const doneChange = !task.done;
    API.updateTask(id, { done: doneChange });
    isRender();
  };
  return (
    <div className={styles.block}>
      <div
        className={styles.headerTask}
        style={{
          backgroundColor: task.role.length > 0 ? task.role[0].color : 'grey',
        }}
      >
        <p className={styles.role}>
          {task.role.length > 0 ? task.role[0].name : 'None'}
        </p>
        <p
          style={{ color: task.priority[0].name === '1' ? 'red' : 'grey' }}
          className={styles.priorityTask}
        >
          {task.priority[0].name}
        </p>
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
        <div>
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
                style={{ fill: '#939393' }}
                d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
              />
            </svg>
          </button>
          <button
            style={{ backgroundColor: task.done ? '#ff8787' : '#f5f7fa' }}
            onClick={() => renderMainPage(task._id)}
            className={styles.btnDone}
            type="button"
          >
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
              <path
                style={{ fill: task.done ? 'red' : '#939393' }}
                className={styles.pathSvg}
                d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  isRender: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
