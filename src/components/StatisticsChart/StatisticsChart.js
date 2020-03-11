import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut, defaults } from 'react-chartjs-2';

// import styles from './StatisticsChart.module.css';

defaults.global.tooltips = false;

const getData = statistics => {
  return {
    labels: statistics.map(el => el.name),
    datasets: [
      {
        data: statistics.map(el => el.precents),
        backgroundColor: statistics.map(el => el.color),
      },
    ],
  };
};

export default class StatisticsChart extends Component {
  static propTypes = {
    statistics: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        id_user: PropTypes.string.isRequired,
        completedTask: PropTypes.number.isRequired,
        precents: PropTypes.number.isRequired,
        totalRoleTasks: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  state = {
    categoryDropDown: false,
  };

  render() {
    const { categoryDropDown } = this.state;
    const { statistics } = this.props;

    const data = getData(statistics);

    return (
      <div width="500" height="500">
        <Doughnut
          data={data}
          width={300}
          height={300}
          options={{
            legend: false,
            responsive: false,
            hover: {
              mode: false,
            },
          }}
        />
        {/* <div className={styles.row}>
          <button
            className={styles.openRoleFormBtn}
            type="button"
            onClick={this.roleFormDisplayToggle}
          >
            <span className={styles.myRolesTitle}>My&nbsp;roles</span>
            {categoryDropDown ? (
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
        </div> */}
        {categoryDropDown && <p>hello</p>}
      </div>
    );
  }
}
