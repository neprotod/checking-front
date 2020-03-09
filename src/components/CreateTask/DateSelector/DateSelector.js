/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import styles from './DateSelector.module.css';

const DateSelector = ({
  datePickerIsOpen,
  startDate,
  datePickerDisplayToggle,
  onSetDate,
}) => {
  const dateCreator = () => {
    const monthNumber = startDate.getMonth();

    const month =
      monthNumber === 0
        ? 'Jan'
        : monthNumber === 1
        ? 'Feb'
        : monthNumber === 2
        ? 'Mar'
        : monthNumber === 3
        ? 'Apr'
        : monthNumber === 4
        ? 'May'
        : monthNumber === 5
        ? 'Jun'
        : monthNumber === 6
        ? 'Jul'
        : monthNumber === 7
        ? 'Aug'
        : monthNumber === 8
        ? 'Sep'
        : monthNumber === 9
        ? 'Oct'
        : monthNumber === 10
        ? 'Nov'
        : monthNumber === 11
        ? 'Dec'
        : null;

    const day = startDate.getDate();
    const year = startDate.getFullYear();
    const date = `${month} ${day}, ${year}`;

    return date;
  };

  return (
    <>
      <button
        type="button"
        className={styles.dateSelector}
        onClick={datePickerDisplayToggle}
      >
        <span>{dateCreator()}</span>
        {datePickerIsOpen ? (
          <svg className={styles.iconArrow}>
            <use href="#drop_up" />
          </svg>
        ) : (
          <svg className={styles.iconArrow}>
            <use href="#drop_down" />
          </svg>
        )}
      </button>
      {datePickerIsOpen && (
        <div className={styles.datePickerContainer}>
          <DatePicker
            selected={startDate}
            onChange={date => onSetDate(date)}
            showMonthDropdown
            showYearDropdown
            inline
            className={styles.dateSelector}
            calendarClassName={styles.calendar}
          />
        </div>
      )}
    </>
  );
};

DateSelector.propTypes = {
  datePickerIsOpen: PropTypes.bool.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  datePickerDisplayToggle: PropTypes.func.isRequired,
  onSetDate: PropTypes.func.isRequired,
};

export default DateSelector;
