import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import TasksFieldMarkup from './TasksFieldMarkup';
import TasksFieldButtonMarkup from './TasksFieldButtonMarkup';
import LogOut from '../LogOut/index';
import StatisticButton from '../StatisticButton/index';

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

const TasksField = ({ ...props }) => {
  const {
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
  } = props;

  const arrowTodayBackForth = todayToggle ? arrowDown : arrowUp;
  const arrowTomorrowBackForth = tomorrowToggle ? arrowDown : arrowUp;
  const arrowNext7DaysBackForth = next7DaysToggle ? arrowDown : arrowUp;
  const arrowAfter7DaysBackForth = after7DaysToggle ? arrowDown : arrowUp;
  const arrowBurnedBackForth = burnedToggle ? arrowDown : arrowUp;
  const arrowDoneBackForth = doneToggle ? arrowDown : arrowUp;

  let title;
  let bg;
  let picture;

  return (
    <>
      {!isCreateTaskFormOpen && (
        <div className={styles.container}>
          <LogOut />
          <StatisticButton />
          <div className={styles.menu}>
            {Object.entries(props)
              .filter(
                prop =>
                  prop[0] === 'todayTomorrow' ||
                  prop[0] === 'next7After7' ||
                  prop[0] === 'burned' ||
                  prop[0] === 'done',
              )
              .map(prop => {
                bg = prop[1] ? styles.whiteBg : styles.grayBg;
                switch (prop[0]) {
                  case 'todayTomorrow':
                    title = 'Today/Tom';
                    picture = todayTomorrowSvg;
                    break;
                  case 'next7After7':
                    title = 'Next 7';
                    picture = Next7Svg;
                    break;
                  case 'burned':
                    title = 'Burned Out';
                    picture = burnedOutSvg;
                    break;

                  case 'done':
                    title = 'Done';
                    picture = doneSvg;
                    break;

                  default:
                }
                return (
                  <TasksFieldButtonMarkup
                    key={prop[0]}
                    name={prop[0]}
                    bg={bg}
                    onClickFilter={onClickFilter}
                    picture={picture}
                    title={title}
                  />
                );
              })}
          </div>
          <div className={styles.tasksContainer}>
            {todayTomorrow && (
              <TasksFieldMarkup
                name="todayToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="Today"
                arrowType={arrowTodayBackForth}
                toggleType={todayToggle}
                tasksType="tasksToday"
              />
            )}
            {todayTomorrow && (
              <TasksFieldMarkup
                name="tomorrowToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="Tomorrow"
                arrowType={arrowTomorrowBackForth}
                toggleType={tomorrowToggle}
                tasksType="tasksTomorrow"
              />
            )}
            {next7After7 && (
              <TasksFieldMarkup
                name="next7DaysToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="Next 7 Days"
                arrowType={arrowNext7DaysBackForth}
                toggleType={next7DaysToggle}
                tasksType="tasksNext7Days"
              />
            )}
            {next7After7 && (
              <TasksFieldMarkup
                name="after7DaysToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="After 7 Days"
                arrowType={arrowAfter7DaysBackForth}
                toggleType={after7DaysToggle}
                tasksType="tasksAfter7Days"
              />
            )}
            {burned && (
              <TasksFieldMarkup
                name="burnedToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="Burned Out"
                arrowType={arrowBurnedBackForth}
                toggleType={burnedToggle}
                tasksType="tasksBurnedOut"
              />
            )}
            {done && (
              <TasksFieldMarkup
                name="doneToggle"
                onClickTasksToggle={onClickTasksToggle}
                title="Done"
                arrowType={arrowDoneBackForth}
                toggleType={doneToggle}
                tasksType="tasksDone"
              />
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

TasksField.propTypes = {
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

export default TasksField;
