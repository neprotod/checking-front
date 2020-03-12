import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';
import * as tasksOperations from '../../redux/tasks/tasks/tasksOperations';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';
import TasksContainer from '../../components/FilterTasks/TasksContainer';
import MobileTasksContainer from '../../components/FilterTasks/MobileTasksContainer';
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
    isMobileNext7: false,
    isMobileAfter7: false,
    isMobileBurned: false,
    isMobileDone: false,
    isMobileStatistics: false,
    isCreateTaskFormOpen: false,
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
      isMobileNext7: false,
      isMobileAfter7: false,
      isMobileBurned: false,
      isMobileDone: false,
      isMobileStatistics: false,
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
      isMobileNext7,
      isMobileAfter7,
      isMobileBurned,
      isMobileDone,
      isMobileStatistics,
      isCreateTaskFormOpen,
    } = this.state;

    return (
      <div>
        {isCreateTaskFormOpen && (
          <CreateTask
            onClickIsCreateTaskFormOpen={this.onClickIsCreateTaskFormOpen}
          />
        )}
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches =>
            matches.small ? (
              <MobileTasksContainer
                onClickIsMobile={this.onClickIsMobile}
                onClickIsModalOpen={this.onClickIsModalOpen}
                onClickIsCreateTaskFormOpen={this.onClickIsCreateTaskFormOpen}
                isModalOpen={isModalOpen}
                isMobileToday={isMobileToday}
                isMobileTomorrow={isMobileTomorrow}
                isMobileNext7={isMobileNext7}
                isMobileAfter7={isMobileAfter7}
                isMobileBurned={isMobileBurned}
                isMobileDone={isMobileDone}
                isMobileStatistics={isMobileStatistics}
                isCreateTaskFormOpen={isCreateTaskFormOpen}
              />
            ) : (
              <TasksContainer
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
                isCreateTaskFormOpen={isCreateTaskFormOpen}
              />
            )
          }
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
