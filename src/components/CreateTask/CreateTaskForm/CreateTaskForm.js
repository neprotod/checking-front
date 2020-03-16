/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Notyf } from 'notyf';
import RoleSelector from '../RoleSelector/RoleSelector';
import DateSelector from '../DateSelector/DateSelector';
import TimeSelector from '../TimeSelector/TimeSelector';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Message from '../Message/Message';
import API from '../../../services/api';
import config from '../../../config';
import { taskSchema, throwErr } from './taskValidation';
import styles from './CreateTaskForm.module.css';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
const { defaultRole } = config;

class CreateTaskForm extends Component {
  static defaultProps = {
    taskToEdit: null,
  };

  static propTypes = {
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        id_user: PropTypes.string.isRequired,
      }),
    ).isRequired,
    priorities: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getRoles: PropTypes.func.isRequired,
    getPriorities: PropTypes.func.isRequired,
    onClickIsCreateTaskFormOpen: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    taskToEdit: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      role: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          id_user: PropTypes.string.isRequired,
        }),
      ),
      start_date: PropTypes.string,
      end_date: PropTypes.string,
      priority: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        }),
      ),
      _id: PropTypes.string,
    }),
  };

  state = {
    rolesListIsOpen: false,
    datePickerIsOpen: false,
    startHoursListIsOpen: false,
    endHoursListIsOpen: false,
    selectedRole: defaultRole,
    startDate: new Date(),
    startHour: 0,
    endHour: 0,
    title: '',
    description: '',
    priority: null,
    titleMessageIsShowing: false,
    descriptionMessageIsShowing: false,
    titleMessageText: '',
    descriptionMessageText: '',
    taskToUpdateId: null,
  };

  hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];

  componentDidMount() {
    const { getRoles, getPriorities, taskToEdit } = this.props;
    getRoles();
    getPriorities();
    if (taskToEdit) {
      this.onEditTask(taskToEdit);
    }
  }

  componentDidUpdate(prevProps) {
    const { selectedRole } = this.state;
    const { roles } = this.props;

    if (roles.length !== prevProps.roles.length) {
      const match = roles.find(role => role._id === selectedRole._id);
      if (!match) {
        this.setDefaultRole();
      }
    }
  }

  roleSelectorDisplayToggle = () => {
    this.setState(prevState => ({
      rolesListIsOpen: !prevState.rolesListIsOpen,
    }));
  };

  datePickerDisplayToggle = () => {
    this.setState(prevState => ({
      datePickerIsOpen: !prevState.datePickerIsOpen,
    }));
  };

  startHoursListDisplayToggle = () => {
    this.setState(prevState => ({
      startHoursListIsOpen: !prevState.startHoursListIsOpen,
    }));
  };

  endHoursListDisplayToggle = () => {
    this.setState(prevState => ({
      endHoursListIsOpen: !prevState.endHoursListIsOpen,
    }));
  };

  onSelectRole = ({ target }) => {
    const { roles } = this.props;
    const rolesWithDefaultRole = [...roles, defaultRole];

    const selectedRole = rolesWithDefaultRole.find(
      role => role.name === target.value,
    );

    this.setState({ selectedRole });
    this.setState(prevState => ({
      rolesListIsOpen: !prevState.rolesListIsOpen,
    }));
  };

  setDefaultRole = () => {
    this.setState({
      selectedRole: defaultRole,
    });
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSetDate = date => {
    this.setState({
      startDate: date,
    });
  };

  onSetStartHour = async ({ currentTarget }) => {
    await this.setState({
      startHour: +currentTarget.name,
      startHoursListIsOpen: false,
    });

    const { startHour, endHour } = this.state;

    if (endHour < startHour) {
      this.setState({ endHour: startHour });
    }
  };

  onSetEndHour = ({ currentTarget }) => {
    this.setState({
      endHour: +currentTarget.name,
      endHoursListIsOpen: false,
    });
  };

  endHoursListGenerator = () => {
    const { startHour } = this.state;
    return this.hours.filter(hour => hour >= startHour);
  };

  onSetPriority = ({ target }) => {
    const { priorities } = this.props;
    const priorityToSet = priorities.find(
      priority => priority.name === target.name,
    );

    this.setState({ priority: priorityToSet });
  };

  fixedHourDateCreator = (date, hour) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (hour === 24) {
      return new Date(year, month, day, 23, 59);
    }

    return new Date(year, month, day, hour);
  };

  showTitleMessage = text => {
    this.setState(
      prevState => ({
        titleMessageIsShowing: !prevState.titleMessageIsShowing,
        titleMessageText: text,
      }),
      () =>
        setTimeout(() => {
          this.setState(prevState => ({
            titleMessageIsShowing: !prevState.titleMessageIsShowing,
            titleMessageText: '',
          }));
        }, 2000),
    );
  };

  showDescriptionMessage = text => {
    this.setState(
      prevState => ({
        descriptionMessageIsShowing: !prevState.descriptionMessageIsShowing,
        descriptionMessageText: text,
      }),
      () =>
        setTimeout(() => {
          this.setState(prevState => ({
            descriptionMessageIsShowing: !prevState.descriptionMessageIsShowing,
            descriptionMessageText: '',
          }));
        }, 2000),
    );
  };

  onEditTask = taskToEdit => {
    this.setState({
      title: taskToEdit.title,
      description: taskToEdit.description,
      selectedRole: taskToEdit.role[0] || defaultRole,
      startDate: new Date(taskToEdit.start_date),
      startHour: new Date(taskToEdit.start_date).getHours(),
      endHour: new Date(taskToEdit.end_date).getHours(),
      priority: taskToEdit.priority[0],
      taskToUpdateId: taskToEdit._id,
    });
  };

  // onDeleteTask = () => {
  //   const { taskToUpdateId } = this.state;
  //   const { onClickIsCreateTaskFormOpen } = this.props;

  //   API.deleteTask(taskToUpdateId)
  //     .then(res => {
  //       if (res) {
  //         this.resetForm();
  //         onClickIsCreateTaskFormOpen();
  //         this.renderMainPage();
  //       }
  //     })
  //     .catch(err => notyf.error('Error while deleting a task'));
  // };

  onSubmit = async e => {
    e.preventDefault();

    const {
      selectedRole,
      priority,
      title,
      description,
      startDate,
      startHour,
      endHour,
      taskToUpdateId,
    } = this.state;

    const { priorities, onClickIsCreateTaskFormOpen } = this.props;

    const task = {
      role: selectedRole._id === 'none' ? '' : selectedRole._id,
      priority: priority === null ? priorities[0]._id : priority._id,
      title,
      description,
      start_date: this.fixedHourDateCreator(startDate, startHour),
      end_date: this.fixedHourDateCreator(startDate, endHour),
      done: false,
    };

    taskSchema
      .isValid(task)
      .then(async valid => {
        if (valid) {
          if (taskToUpdateId) {
            await API.updateTask(taskToUpdateId, task)
              .then(res => {
                if (res) {
                  this.resetForm();
                  onClickIsCreateTaskFormOpen();
                  this.renderMainPage();
                }
              })
              // eslint-disable-next-line no-unused-vars
              .catch(err => notyf.error('Error while updating a task'));
          } else {
            await API.createTask(task)
              .then(res => {
                if (res) {
                  this.resetForm();
                  onClickIsCreateTaskFormOpen();
                  this.renderMainPage();
                }
              })
              // eslint-disable-next-line no-unused-vars
              .catch(err => notyf.error('Error while saving a task'));
          }
        } else {
          throwErr();
        }
      })
      .catch(err => {
        const errors = JSON.parse(err.message);

        if (errors) {
          if (errors.title) this.showTitleMessage(errors.title);
          if (errors.description)
            this.showDescriptionMessage(errors.description);
        }
      });
  };

  renderMainPage = () => {
    const { history } = this.props;
    history.push('/');
    history.push('/main');
  };

  resetForm = () => {
    this.setState({
      rolesListIsOpen: false,
      datePickerIsOpen: false,
      startHoursListIsOpen: false,
      endHoursListIsOpen: false,
      selectedRole: defaultRole,
      startDate: new Date(),
      startHour: 0,
      endHour: 0,
      title: '',
      description: '',
      priority: null,
      titleMessageIsShowing: false,
      descriptionMessageIsShowing: false,
      titleMessageText: '',
      descriptionMessageText: '',
    });
  };

  render() {
    const {
      rolesListIsOpen,
      selectedRole,
      datePickerIsOpen,
      startDate,
      title,
      description,
      startHoursListIsOpen,
      endHoursListIsOpen,
      startHour,
      endHour,
      priority,
      titleMessageIsShowing,
      descriptionMessageIsShowing,
      titleMessageText,
      descriptionMessageText,
    } = this.state;

    const { roles, priorities, onClickIsCreateTaskFormOpen } = this.props;

    return (
      <>
        <form className={styles.createTaskForm} onSubmit={this.onSubmit}>
          <div className={styles.row}>
            <div className={styles.selectorContainer}>
              <span className={styles.selectorLabel}>Choose role</span>
              <RoleSelector
                roles={roles}
                defaultRole={defaultRole}
                selectedRole={selectedRole}
                rolesListIsOpen={rolesListIsOpen}
                roleSelectorDisplayToggle={this.roleSelectorDisplayToggle}
                onSelectRole={this.onSelectRole}
              />
            </div>

            <div className={styles.selectorContainer}>
              <span className={styles.selectorLabel}>Date</span>
              <DateSelector
                datePickerIsOpen={datePickerIsOpen}
                startDate={startDate}
                datePickerDisplayToggle={this.datePickerDisplayToggle}
                onSetDate={this.onSetDate}
              />
            </div>
          </div>

          <label className={styles.inputLabel} htmlFor="DnyTR1XIpA">
            Title{' '}
            {titleMessageIsShowing ? (
              <Message text={titleMessageText} />
            ) : (
              <>
                <span className={styles.inputLabelSmall}>
                  (up to 150 characters)
                </span>
                <span className={styles.required}>*</span>
              </>
            )}
            <input
              className={styles.titleInput}
              id="DnyTR1XIpA"
              type="text"
              name="title"
              value={title}
              placeholder="Write title"
              onChange={this.onInputChange}
            />
          </label>

          <label className={styles.inputLabel} htmlFor="hUKPs8tGVU">
            Description{' '}
            {descriptionMessageIsShowing ? (
              <Message text={descriptionMessageText} />
            ) : (
              <>
                <span className={styles.inputLabelSmall}>
                  (up to 800 characters)
                </span>
                <span className={styles.required}>*</span>
              </>
            )}
            <textarea
              className={styles.descriptionTextarea}
              id="hUKPs8tGVU"
              cols="30"
              rows="10"
              name="description"
              value={description}
              placeholder="Your description"
              onChange={this.onInputChange}
            />
          </label>

          <TimeSelector
            startHoursListIsOpen={startHoursListIsOpen}
            endHoursListIsOpen={endHoursListIsOpen}
            startHours={this.hours}
            endHours={this.endHoursListGenerator}
            startHour={startHour}
            endHour={endHour}
            startHoursListDisplayToggle={this.startHoursListDisplayToggle}
            endHoursListDisplayToggle={this.endHoursListDisplayToggle}
            onSetStartHour={this.onSetStartHour}
            onSetEndHour={this.onSetEndHour}
          />

          <PrioritySelector
            priorities={priorities}
            selectedPriority={priority === null ? priorities[0] : priority}
            onSetPriority={this.onSetPriority}
          />

          {/* {taskToUpdateId && (
            <div className={styles.deleteBtnContainer}>
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={this.onDeleteTask}
              >
                <svg className={styles.iconDelete}>
                  <use href="#delete_task" />
                </svg>
              </button>
            </div>
          )} */}

          <div className={styles.formControls}>
            <button
              className={styles.cancelBtn}
              type="button"
              onClick={onClickIsCreateTaskFormOpen}
            >
              Cancel
            </button>
            <button className={styles.submitBtn} type="submit">
              Accept
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(CreateTaskForm);
