/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import Task from './Task';

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const arrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M7 10l5 5 5-5z" transform="rotate(180, 12, 12)" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const todayTomorrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const Next7Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57c.25-.35.25-.81 0-1.16l-3.96-5.58C16.26 5.31 15.65 5 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58z" />
  </svg>
);

const burnedOutSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M17.09 4.56c-.7-1.03-1.5-1.99-2.4-2.85-.35-.34-.94-.02-.84.46.19.94.39 2.18.39 3.29 0 2.06-1.35 3.73-3.41 3.73-1.54 0-2.8-.93-3.35-2.26-.1-.2-.14-.32-.2-.54-.11-.42-.66-.55-.9-.18-.18.27-.35.54-.51.83C4.68 9.08 4 11.46 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.49-1.08-6.73-2.91-9.44zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.47-.3 2.98-.93 4.03-1.92.28-.26.74-.14.82.23.23 1.02.35 2.08.35 3.15.01 2.65-2.14 4.8-4.79 4.8z" />
  </svg>
);

const doneSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
  </svg>
);

const TasksContainer = ({
  onClickFilter,
  onClickIsCreateTaskFormOpen,
  onClickTasksToggle,
  todayTomorrow,
  next7After7,
  burned,
  done,
  todayToggle,
  tomorrowToggle,
  next7DaysToggle,
  after7DaysToggle,
  burnedToggle,
  doneToggle,
  isCreateTaskFormOpen,
  tasks,
}) => {
  const arrowTodayBackForth = todayToggle ? arrowDown : arrowUp;
  const arrowTomorrowBackForth = tomorrowToggle ? arrowDown : arrowUp;
  const arrowNext7DaysBackForth = next7DaysToggle ? arrowDown : arrowUp;
  const arrowAfter7DaysBackForth = after7DaysToggle ? arrowDown : arrowUp;
  const arrowBurnedBackForth = burnedToggle ? arrowDown : arrowUp;
  const arrowDoneBackForth = doneToggle ? arrowDown : arrowUp;

  const bgTodayTomorrow = todayTomorrow ? styles.whiteBg : styles.grayBg;
  const bgNext7After7 = next7After7 ? styles.whiteBg : styles.grayBg;
  const bgBurned = burned ? styles.whiteBg : styles.grayBg;
  const bgDone = done ? styles.whiteBg : styles.grayBg;

  return (
    <>
      {!isCreateTaskFormOpen && (
        <div className={styles.container}>
          <div className={styles.menu}>
            <button
              type="button"
              name="todayTomorrow"
              className={bgTodayTomorrow}
              onClick={onClickFilter}
            >
              <p className={styles.menuButtonPict}>{todayTomorrowSvg}</p>
              <p className={styles.menuButtonText}>Today/Tom</p>
            </button>
            <button
              type="button"
              name="next7After7"
              className={bgNext7After7}
              onClick={onClickFilter}
            >
              <p className={styles.menuButtonPict}>{Next7Svg}</p>
              <p className={styles.menuButtonText}>Next 7</p>
            </button>
            <button
              type="button"
              name="burned"
              className={bgBurned}
              onClick={onClickFilter}
            >
              <p className={styles.menuButtonPict}>{burnedOutSvg}</p>
              <p className={styles.menuButtonText}>Burned Out</p>
            </button>
            <button
              type="button"
              name="done"
              className={bgDone}
              onClick={onClickFilter}
            >
              <p className={styles.menuButtonPict}>{doneSvg}</p>
              <p className={styles.menuButtonText}>Done</p>
            </button>
          </div>
          <div className={styles.tasksContainer}>
            {todayTomorrow && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="todayToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>Today</p>
                    <p className={styles.arrowSvg}>{arrowTodayBackForth}</p>
                  </button>
                  <div className={styles.line} />
                </div>
                {todayToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksToday.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {todayTomorrow && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="tomorrowToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>Tomorrow</p>
                    <p className={styles.arrowSvg}>{arrowTomorrowBackForth}</p>
                  </button>
                  <div className={styles.line} />
                </div>
                {tomorrowToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksTomorrow.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {next7After7 && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="next7DaysToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>Next 7 Days</p>
                    <p className={styles.arrowSvg}>{arrowNext7DaysBackForth}</p>
                  </button>
                  <div className={styles.line} />
                </div>
                {next7DaysToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksNext7Days.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {next7After7 && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="after7DaysToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>After 7 Days</p>
                    <p className={styles.arrowSvg}>
                      {arrowAfter7DaysBackForth}
                    </p>
                  </button>
                  <div className={styles.line} />
                </div>
                {after7DaysToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksAfter7Days.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {burned && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="burnedToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>Burned Out</p>
                    <p className={styles.arrowSvg}>{arrowBurnedBackForth}</p>
                  </button>
                  <div className={styles.line} />
                </div>

                {burnedToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksBurnedOut.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {done && (
              <div>
                <div className={styles.arrowContainer}>
                  <button
                    type="button"
                    name="doneToggle"
                    className={styles.toggleButton}
                    onClick={onClickTasksToggle}
                  >
                    <p className={styles.arrowText}>Done</p>
                    <p className={styles.arrowSvg}>{arrowDoneBackForth}</p>
                  </button>
                  <div className={styles.line} />
                </div>
                {doneToggle && (
                  <ul className={styles.taskUl}>
                    {tasks.tasksDone.map(task => (
                      <li key={task._id} className={styles.taskList}>
                        <Task task={task} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            className={styles.addTask}
            onClick={onClickIsCreateTaskFormOpen}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

TasksContainer.propTypes = {
  tasks: PropTypes.shape().isRequired,
  onClickFilter: PropTypes.func.isRequired,
  onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
  onClickTasksToggle: PropTypes.func.isRequired,
  todayTomorrow: PropTypes.bool.isRequired,
  next7After7: PropTypes.bool.isRequired,
  burned: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  todayToggle: PropTypes.bool.isRequired,
  tomorrowToggle: PropTypes.bool.isRequired,
  next7DaysToggle: PropTypes.bool.isRequired,
  after7DaysToggle: PropTypes.bool.isRequired,
  burnedToggle: PropTypes.bool.isRequired,
  doneToggle: PropTypes.bool.isRequired,
  isCreateTaskFormOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps)(TasksContainer);
