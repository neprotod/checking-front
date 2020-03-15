import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';
import style from '../../components/FilterTasks/MainPage.module.css';
import * as tasksOperations from '../../redux/tasks/tasks/tasksOperations';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';

import TasksField from '../../components/FilterTasks/TasksField';
import MobileTasksField from '../../components/FilterTasks/MobileTasksField';

import CreateTask from '../../components/CreateTask/CreateTaskContainer';

class MainPage extends Component {
  static propTypes = {
    todayFilter: PropTypes.func.isRequired,
    tomorrowFilter: PropTypes.func.isRequired,
    next7DaysFilter: PropTypes.func.isRequired,
    after7DaysFilter: PropTypes.func.isRequired,
    burnedOutFilter: PropTypes.func.isRequired,
    doneFilter: PropTypes.func.isRequired,
  };

  state = {
    todayTomorrow: true,
    next7After7: false,
    burned: false,
    done: false,
    todayToggle: true,
    tomorrowToggle: true,
    next7DaysToggle: true,
    after7DaysToggle: true,
    burnedToggle: true,
    doneToggle: true,
    isModalOpen: false,
    isMobileToday: true,
    isMobileTomorrow: false,

    isMobileNext7Days: false,
    isMobileAfter7Days: false,
    isMobileBurnedOut: false,
    isMobileDone: false,
    statistics: false,

    isCreateTaskFormOpen: false,
    isCreateTaskFormOpenDesktop: false,
  };

  componentDidMount() {
    const {
      todayFilter,
      tomorrowFilter,
      next7DaysFilter,
      after7DaysFilter,
      burnedOutFilter,
      doneFilter,
    } = this.props;
    todayFilter('Today');
    tomorrowFilter('Tomorrow');
    next7DaysFilter('Week');
    after7DaysFilter('Afterweek');
    burnedOutFilter('Burned');
    doneFilter('Done');
  }

  onClickFilter = e => {
    const target = e.currentTarget.name;

    this.setState({
      todayTomorrow: false,
      next7After7: false,
      burned: false,
      done: false,
      [target]: true,
    });
  };

  onClickTasksToggle = e => {
    const target = e.currentTarget.name;

    this.setState(prevState => ({
      [target]: !prevState[target],
    }));
  };

  onClickIsMobile = e => {
    const target = e.currentTarget.name;

    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      isMobileToday: false,
      isMobileTomorrow: false,

      isMobileNext7Days: false,
      isMobileAfter7Days: false,
      isMobileBurnedOut: false,
      isMobileDone: false,
      statistics: false,
      [target]: true,
    }));
  };

  onClickIsModalOpen = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  onClickIsCreateTaskFormOpen = () => {
    this.setState(prevState => ({
      isCreateTaskFormOpen: !prevState.isCreateTaskFormOpen,
      isCreateTaskFormOpenDesktop: !prevState.isCreateTaskFormOpenDesktop,
    }));
  };

  render() {
    const {
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
      isModalOpen,
      isMobileToday,
      isMobileTomorrow,

      isMobileNext7Days,
      isMobileAfter7Days,
      isMobileBurnedOut,
      isMobileDone,
      statistics,
      isCreateTaskFormOpen,
      isCreateTaskFormOpenDesktop,
    } = this.state;

    return (
      <div className={style.wrapper}>
        {isCreateTaskFormOpen && (
          <CreateTask
            onClickIsCreateTaskFormOpen={this.onClickIsCreateTaskFormOpen}
          />
        )}
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(max-width: 1279px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches =>
            matches.small ? (
              <MobileTasksField
                onClickIsMobile={this.onClickIsMobile}
                onClickIsModalOpen={this.onClickIsModalOpen}
                onClickIsCreateTaskFormOpen={this.onClickIsCreateTaskFormOpen}
                isModalOpen={isModalOpen}
                isMobileToday={isMobileToday}
                isMobileTomorrow={isMobileTomorrow}
                isMobileNext7Days={isMobileNext7Days}
                isMobileAfter7Days={isMobileAfter7Days}
                isMobileBurnedOut={isMobileBurnedOut}
                isMobileDone={isMobileDone}
                statistics={statistics}
                isCreateTaskFormOpen={isCreateTaskFormOpen}
              />
            ) : (
              <TasksField
                onClickFilter={this.onClickFilter}
                onClickTasksToggle={this.onClickTasksToggle}
                onClickIsCreateTaskFormOpen={this.onClickIsCreateTaskFormOpen}
                todayTomorrow={todayTomorrow}
                next7After7={next7After7}
                burned={burned}
                done={done}
                todayToggle={todayToggle}
                tomorrowToggle={tomorrowToggle}
                next7DaysToggle={next7DaysToggle}
                after7DaysToggle={after7DaysToggle}
                burnedToggle={burnedToggle}
                doneToggle={doneToggle}
                isCreateTaskFormOpenDesktop={isCreateTaskFormOpenDesktop}
              />
            )
          }}
        </Media>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  todayFilter: query => dispatch(tasksOperations.filterToday(query)),
  tomorrowFilter: query => dispatch(tasksOperations.filterTomorrow(query)),
  next7DaysFilter: query => dispatch(tasksOperations.filterNext7Days(query)),
  after7DaysFilter: query => dispatch(tasksOperations.filterAfter7Days(query)),
  burnedOutFilter: query => dispatch(tasksOperations.filterBurnedOut(query)),
  doneFilter: query => dispatch(tasksOperations.filterDone(query)),
});

const mapStateToProps = store => ({
  tasks: tasksSelectors.getTasks(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
