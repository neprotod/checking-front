import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './MainPage.module.css';
// eslint-disable-next-line import/no-cycle
import ModalMenu from './ModalMenu';
import MobileTasksFieldMarkup from './MobileTasksFieldMarkup';

const MobileTasksField = ({ ...props }) => {
  const {
    onClickIsCreateTaskFormOpen,
    onClickIsModalOpen,
    isModalOpen,
    isCreateTaskFormOpen,
    statistics,
    editTask,
    deleteTask,
    isRender,
  } = props;

  const StyledBurger = styled.button`
    position: fixed;
    z-index: 200;
    right: 10px;
    top: 10px;
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
  let title;
  let tasksType;
  let burned = false;
  return (
    <>
      {!isCreateTaskFormOpen && !statistics && (
        <p className={styles.burgerMenu}>
          <StyledBurger open={isModalOpen} onClick={onClickIsModalOpen}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </p>
      )}
      <div className={modalMenuStyle}>
        <ModalMenu {...props} />
      </div>

      {!isModalOpen && !isCreateTaskFormOpen && !statistics && (
        <div className={styles.container}>
          <div className={styles.tasksContainer}>
            {Object.entries(props).forEach(([tasksTypeField, isMobile]) => {
              if (tasksTypeField.includes('isMobile') && isMobile) {
                tasksType = `tasks${tasksTypeField.slice(8)}`;
                title = tasksTypeField.slice(8);
                switch (title) {
                  case 'Next7Days':
                    title = 'Next 7 Days';
                    break;
                  case 'After7Days':
                    title = 'After 7 Days';
                    break;
                  case 'BurnedOut':
                    title = 'Burned Out';
                    burned = true;
                    break;
                  default:
                    return title;
                }
              }
              return title;
            })}

            <MobileTasksFieldMarkup
              title={title}
              tasksType={tasksType}
              editTask={editTask}
              deleteTask={deleteTask}
              isRender={isRender}
              burned={burned}
            />
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

MobileTasksField.defaultProps = {
  burned: false,
};

MobileTasksField.propTypes = {
  onClickIsMobile: PropTypes.func.isRequired,
  onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
  onClickIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isMobileToday: PropTypes.bool.isRequired,
  isMobileTomorrow: PropTypes.bool.isRequired,
  isMobileNext7Days: PropTypes.bool.isRequired,
  isMobileAfter7Days: PropTypes.bool.isRequired,
  isMobileBurnedOut: PropTypes.bool.isRequired,
  isMobileDone: PropTypes.bool.isRequired,
  statistics: PropTypes.bool.isRequired,
  isCreateTaskFormOpen: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  isRender: PropTypes.func.isRequired,
  burned: PropTypes.bool,
};

export default MobileTasksField;
