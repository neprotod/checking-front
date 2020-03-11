/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrioritySelector.module.css';

const PrioritySelector = ({ priorities, selectedPriority, onSetPriority }) => {
  return (
    <>
      <span className={styles.selectorTitle}>Priority</span>
      <div className={styles.container}>
        {priorities.map(priority => {
          const priorityClass = `priority${priority.type}`;
          return (
            <button
              className={styles[priorityClass]}
              style={
                selectedPriority.name === priority.name
                  ? { width: '32px', height: '32px' }
                  : { width: '26px', height: '26px' }
              }
              key={priority._id}
              type="button"
              name={priority.name}
              onClick={onSetPriority}
            >
              {priority.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

PrioritySelector.defaultProps = {
  selectedPriority: {},
};

PrioritySelector.propTypes = {
  priorities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  selectedPriority: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
  onSetPriority: PropTypes.func.isRequired,
};

export default PrioritySelector;
