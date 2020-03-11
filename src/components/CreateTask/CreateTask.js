import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateRoleFormContainer from './CreateRoleForm/CreateRoleFormContainer';
import CreateTaskForm from './CreateTaskForm/CreateTaskFormContainer';
import Loader from './Loader/Loader';
import styles from './CreateTask.module.css';
import IconsSprite from './IconsSprite/IconsSprite';

class CreateTask extends Component {
  static propTypes = {
    isFormLoading: PropTypes.bool.isRequired,
  };

  state = {
    roleFormIsOpen: false,
  };

  roleFormDisplayToggle = () => {
    this.setState(prevState => ({
      roleFormIsOpen: !prevState.roleFormIsOpen,
    }));
  };

  render() {
    const { roleFormIsOpen } = this.state;
    const { isFormLoading } = this.props;

    return (
      <div className={styles.createTaskWrapper}>
        {isFormLoading && <Loader />}
        <IconsSprite />
        <div className={styles.container}>
          <h3 className={styles.header}>Create task</h3>
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
          <CreateTaskForm />
        </div>
      </div>
    );
  }
}

export default CreateTask;