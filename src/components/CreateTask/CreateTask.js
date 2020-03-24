import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateRoleForm from './CreateRoleForm/CreateRoleFormContainer';
import CreateTaskForm from './CreateTaskForm/CreateTaskFormContainer';
import Loader from './Loader/Loader';
import styles from './CreateTask.module.css';
import IconsSprite from './IconsSprite/IconsSprite';

class CreateTask extends Component {
  static propTypes = {
    isFormLoading: PropTypes.bool.isRequired,
    onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
    taskToEdit: PropTypes.shape(),
    renderToggle: PropTypes.func.isRequired,
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
      renderToggle,
      taskToEdit,
    } = this.props;

    return (
      <div className={styles.createTaskWrapper}>
        <IconsSprite />
        <div className={styles.container}>
          <div className={styles.headingWrapper}>
            <h3 className={styles.heading}>
              {taskToEdit ? 'Edit Task' : 'Create task'}
            </h3>
            {isFormLoading && <Loader />}
          </div>
          <div className={styles.row}>
            <button
              className={styles.openRoleFormBtn}
              type="button"
              onClick={this.roleFormDisplayToggle}
            >
              <span className={styles.myRolesTitle}>My&nbsp;roles</span>
              <svg className={styles.iconArrow}>
                <use href={roleFormIsOpen ? '#drop_up' : '#drop_down'} />
              </svg>
            </button>
            <div className={styles.line} />
          </div>
          {roleFormIsOpen && <CreateRoleForm />}
          <CreateTaskForm
            onClickIsCreateTaskFormOpen={onClickIsCreateTaskFormOpen}
            taskToEdit={taskToEdit}
            renderToggle={renderToggle}
          />
        </div>
      </div>
    );
  }
}

export default CreateTask;
