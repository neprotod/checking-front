/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './MainPage.module.css';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import Task from './Task';
import ModalMenu from './ModalMenu';

const MobileTasksContainer = ({
  onClickIsMobile,
  onClickIsCreateTaskFormOpen,
  onClickIsModalOpen,
  isModalOpen,
  isMobileToday,
  isMobileTomorrow,
  isMobileNext7,
  isMobileAfter7,
  isMobileBurned,
  isMobileDone,
  isMobileStatistics,
  isCreateTaskFormOpen,
  tasks,
}) => {
  const StyledBurger = styled.button`
    position: fixed;
    z-index: 100;
    transform: translate(296px, -30px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
      outline: none;
    }

    div {
      width: 24px;
      height: 2px;
      background: black;
      border-radius: 8px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
          open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  `;
  const modalMenuStyle = isModalOpen ? styles.modalMenu : styles.modalMenuBg;
  return (
    <>
      <p className={styles.burgerMenu}>
        <StyledBurger open={isModalOpen} onClick={onClickIsModalOpen}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </p>
      <div className={modalMenuStyle}>
        <ModalMenu
          onClickIsMobile={onClickIsMobile}
          isModalOpen={isModalOpen}
          isMobileToday={isMobileToday}
          isMobileTomorrow={isMobileTomorrow}
          isMobileNext7={isMobileNext7}
          isMobileAfter7={isMobileAfter7}
          isMobileBurned={isMobileBurned}
          isMobileDone={isMobileDone}
          isMobileStatistics={isMobileStatistics}
        />
      </div>

      {!isModalOpen && !isCreateTaskFormOpen && (
        <div className={styles.container}>
          <div className={styles.tasksContainer}>
            {isMobileToday && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>Today</p>
                </div>

                <ul className={styles.taskUl}>
                  {tasks.tasksToday.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isMobileTomorrow && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>Tomorrow</p>
                </div>

                <ul className={styles.taskUl}>
                  {tasks.tasksTomorrow.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isMobileNext7 && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>Next 7 Days</p>
                </div>

                <ul className={styles.taskUl}>
                  {tasks.tasksNext7Days.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isMobileAfter7 && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>After 7 Days</p>
                </div>

                <ul className={styles.taskUl}>
                  {tasks.tasksAfter7Days.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isMobileBurned && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>Burned Out</p>
                </div>

                <ul className={styles.taskUl}>
                  {tasks.tasksBurnedOut.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isMobileDone && (
              <div>
                <div className={styles.arrowContainer}>
                  <p className={styles.arrowText}>Done</p>
                </div>
                <ul className={styles.taskUl}>
                  {tasks.tasksDone.map(task => (
                    <li key={task._id} className={styles.taskList}>
                      <Task task={task} />
                    </li>
                  ))}
                </ul>
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

MobileTasksContainer.propTypes = {
  tasks: PropTypes.shape().isRequired,
  onClickIsMobile: PropTypes.func.isRequired,
  onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
  onClickIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isMobileToday: PropTypes.bool.isRequired,
  isMobileTomorrow: PropTypes.bool.isRequired,
  isMobileNext7: PropTypes.bool.isRequired,
  isMobileAfter7: PropTypes.bool.isRequired,
  isMobileBurned: PropTypes.bool.isRequired,
  isMobileDone: PropTypes.bool.isRequired,
  isMobileStatistics: PropTypes.bool.isRequired,
  isCreateTaskFormOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps)(MobileTasksContainer);
