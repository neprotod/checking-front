import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deleteOperations from '../../redux/delete/deleteOperations';
import deleteSelectors from '../../redux/delete/deleteSelectors';

const DeleteTaskButton = ({ onDelete }) => (
  <div>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const task = deleteSelectors.getTaskById(state, ownProps.id);

  return {
    ...task,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(deleteOperations.deleteTask(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTaskButton);

DeleteTaskButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
