import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './MainPage.module.css';
import ModalMenu from './ModalMenu';
import MobileTasksFieldMarkup from './MobileTasksFieldMarkup';
import Statistics from '../Statistics/index';

const MobileTasksField = ({ ...props }) => {
  const {
    onClickIsCreateTaskFormOpen,
    onClickIsModalOpen,
    isModalOpen,
    isCreateTaskFormOpen,
    statistics,
  } = props;

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
  let title;
  let tasksType;
  return (
    <>
      {statistics && <Statistics />}
      <p className={styles.burgerMenu}>
        {!isCreateTaskFormOpen && !statistics && (
          <StyledBurger open={isModalOpen} onClick={onClickIsModalOpen}>
            <div />
            <div />
            <div />
          </StyledBurger>
        )}
      </p>
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
                    break;
                  default:
                    return title;
                }
              }
              return title;
            })}

            <MobileTasksFieldMarkup title={title} tasksType={tasksType} />
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
};

export default MobileTasksField;
