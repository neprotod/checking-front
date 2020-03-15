import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateRoleFormContainer from './CreateRoleForm/CreateRoleFormContainer';
import CreateTaskForm from './CreateTaskForm/CreateTaskFormContainer';
import Loader from './Loader/Loader';
import styles from './CreateTask.module.css';
import IconsSprite from './IconsSprite/IconsSprite';

class CreateTask extends Component {
  static propTypes = {
    isFormLoading: PropTypes.bool.isRequired,
    onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
    taskToEdit: PropTypes.shape(),
  };

  state = {
    roleFormIsOpen: false,
  };

  static defaultProps = {
    taskToEdit: null,
  };

  roleFormDisplayToggle = () => {
    this.setState(prevState => ({
      roleFormIsOpen: !prevState.roleFormIsOpen,
    }));
  };

  render() {
    const { roleFormIsOpen } = this.state;
    const {
      isFormLoading,
      onClickIsCreateTaskFormOpen,
      taskToEdit,
    } = this.props;

    return (
      <div className={styles.createTaskWrapper}>
        {isFormLoading && <Loader />}
        <IconsSprite />
        <div className={styles.container}>
          <h3 className={styles.header}>
            {taskToEdit ? 'Edit Task' : 'Create task'}
          </h3>
          <div className={styles.row}>
            <button
              className={styles.openRoleFormBtn}
              type="button"
              onClick={this.roleFormDisplayToggle}
            >
              <span className={styles.myRolesTitle}>My&nbsp;roles</span>
              {roleFormIsOpen ? (
                <svg className={styles.iconArrow}>
                  <use href="#drop_up" />
                </svg>
              ) : (
                <svg className={styles.iconArrow}>
                  <use href="#drop_down" />
                </svg>
              )}
            </button>
            <div className={styles.line} />
          </div>
          {roleFormIsOpen && <CreateRoleFormContainer />}
          <CreateTaskForm
            onClickIsCreateTaskFormOpen={onClickIsCreateTaskFormOpen}
            taskToEdit={taskToEdit}
          />
        </div>
      </div>
    );
  }
}

export default CreateTask;
