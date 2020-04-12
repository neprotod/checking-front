/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
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
    renderToggle: PropTypes.func.isRequired,
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
    minStartHour: new Date().getHours(),
    startHour: new Date().getHours(),
    endHour: new Date().getHours() + 1,
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

    document.querySelector('#root').scrollTop = 0;
    document.querySelector('#root').addEventListener('click', this.closeModal);
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

  componentWillUnmount() {
    document
      .querySelector('#root')
      .removeEventListener('click', this.closeModal);
  }

  closeModal = e => {
    const {
      rolesListIsOpen,
      datePickerIsOpen,
      startHoursListIsOpen,
      endHoursListIsOpen,
    } = this.state;

    switch (true) {
      case rolesListIsOpen:
        if (!e.target.closest('#roles-list')) {
          e.stopImmediatePropagation();
          this.roleSelectorDisplayToggle();
        }
        break;

      case datePickerIsOpen:
        if (!e.target.closest('.react-datepicker')) {
          e.stopImmediatePropagation();
          this.datePickerDisplayToggle();
        }
        break;

      case startHoursListIsOpen:
        if (!e.target.closest('#start-hours-list')) {
          e.stopImmediatePropagation();
          this.startHoursListDisplayToggle();
        }
        break;

      case endHoursListIsOpen:
        if (!e.target.closest('#end-hours-list')) {
          e.stopImmediatePropagation();
          this.endHoursListDisplayToggle();
        }
        break;

      default:
        return false;
    }
  };

  // Set role

  roleSelectorDisplayToggle = () => {
    this.setState(prevState => ({
      rolesListIsOpen: !prevState.rolesListIsOpen,
    }));
  };

  onSelectRole = ({ target }) => {
    const { roles } = this.props;
    const rolesWithDefaultRole = [...roles, defaultRole];

    const selectedRole = rolesWithDefaultRole.find(
      role => role.name === target.value,
    );

    this.setState({ selectedRole });
    this.roleSelectorDisplayToggle();
  };

  setDefaultRole = () => {
    this.setState({
      selectedRole: defaultRole,
    });
  };

  // Set date

  datePickerDisplayToggle = () => {
    this.setState(prevState => ({
      datePickerIsOpen: !prevState.datePickerIsOpen,
    }));
  };

  isSelectedDateEqualsNewDate = () => {
    const { startDate } = this.state;

    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const day = startDate.getDate();

    if (
      year === new Date().getFullYear() &&
      month === new Date().getMonth() &&
      day === new Date().getDate()
    ) {
      return true;
    }
    return false;
  };

  onSetDate = async date => {
    await this.setState({
      startDate: date,
    });

    const isToday = this.isSelectedDateEqualsNewDate();
    const { startDate } = this.state;
    const hours = startDate.getHours();

    if (isToday) {
      this.setState({
        minStartHour: hours,
        startHour: hours,
        endHour: hours + 1,
      });
    } else {
      this.setState({ minStartHour: 0, startHour: 0, endHour: 0 });
    }

    this.datePickerDisplayToggle();
  };

  // Set title and description

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  // Set start hour

  startHoursListDisplayToggle = () => {
    this.setState(prevState => ({
      startHoursListIsOpen: !prevState.startHoursListIsOpen,
    }));
  };

  onSetStartHour = async ({ currentTarget }) => {
    await this.setState({
      startHour: +currentTarget.name,
    });

    this.startHoursListDisplayToggle();

    const { minStartHour, startHour, endHour } = this.state;
    const isToday = this.isSelectedDateEqualsNewDate();

    if (isToday && minStartHour === startHour) {
      return this.setState({ endHour: startHour + 1 });
    }

    if (endHour < startHour) {
      this.setState({ endHour: startHour });
    }
  };

  startHoursListGenerator = () => {
    const { minStartHour } = this.state;
    return this.hours.filter(hour => hour >= minStartHour);
  };

  // Set end hour

  endHoursListDisplayToggle = () => {
    this.setState(prevState => ({
      endHoursListIsOpen: !prevState.endHoursListIsOpen,
    }));
  };

  onSetEndHour = ({ currentTarget }) => {
    this.setState({
      endHour: +currentTarget.name,
    });
    this.endHoursListDisplayToggle();
  };

  endHoursListGenerator = () => {
    const { minStartHour, startHour } = this.state;
    const isToday = this.isSelectedDateEqualsNewDate();
    if (isToday && minStartHour === startHour) {
      return this.hours.filter(hour => hour >= startHour + 1);
    }
    return this.hours.filter(hour => hour >= startHour);
  };

  // Set priority

  onSetPriority = ({ target }) => {
    const { priorities } = this.props;
    const priorityToSet = priorities.find(
      priority => priority.name === target.name,
    );

    this.setState({ priority: priorityToSet });
  };

  // Create, edit, delete task

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

    const {
      priorities,
      onClickIsCreateTaskFormOpen,
      renderToggle,
    } = this.props;

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
                  renderToggle();
                }
              })
              .catch(err => notyf.error('Error while updating a task'));
          } else {
            await API.createTask(task)
              .then(res => {
                if (res) {
                  this.resetForm();
                  onClickIsCreateTaskFormOpen();
                  renderToggle();
                }
              })
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

  fixedHourDateCreator = (date, hour) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (hour === 24) {
      return new Date(year, month, day, 23, 59);
    }

    return new Date(year, month, day, hour);
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

  onDeleteTask = () => {
    const { taskToUpdateId } = this.state;
    const { onClickIsCreateTaskFormOpen, renderToggle } = this.props;

    API.deleteTask(taskToUpdateId)
      .then(res => {
        if (res) {
          this.resetForm();
          onClickIsCreateTaskFormOpen();
          renderToggle();
        }
      })
      .catch(err => notyf.error('Error while deleting a task'));
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
      taskToUpdateId,
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
                  (up to 60 characters)
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
            startHours={this.startHoursListGenerator}
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

          {taskToUpdateId && (
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
          )}

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

export default CreateTaskForm;
