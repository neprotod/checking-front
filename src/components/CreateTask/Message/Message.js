import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';

const Message = ({ text, form }) => {
  return (
    <div
      className={
        form === 'role'
          ? styles.roleMessageContainer
          : styles.taskMessageContainer
      }
    >
      <span>{text}</span>
    </div>
  );
};

Message.defaultProps = {
  form: '',
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  form: PropTypes.string,
};

export default Message;
