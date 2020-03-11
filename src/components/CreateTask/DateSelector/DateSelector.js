/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker-custom.css';
import styles from './DateSelector.module.css';

const DateSelector = ({
  datePickerIsOpen,
  startDate,
  datePickerDisplayToggle,
  onSetDate,
}) => {
  const dateCreator = () => {
    const formatter = new Intl.DateTimeFormat('en-us', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return formatter.format(startDate);
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
