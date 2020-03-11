/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoleSelector.module.css';

const RoleSelector = ({
  roles,
  rolesListIsOpen,
  selectedRole,
  roleSelectorDisplayToggle,
  onSelectRole,
}) => {
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: selectedRole.color,
        }}
        className={styles.roleSelectBtn}
        onClick={roleSelectorDisplayToggle}
      >
        <span>{selectedRole.name}</span>
        {rolesListIsOpen ? (
          <svg className={styles.iconArrow}>
            <use href="#drop_up" />
          </svg>
        ) : (
          <svg className={styles.iconArrow}>
            <use href="#drop_down" />
          </svg>
        )}
      </button>
      {rolesListIsOpen && (
        <ul className={styles.rolesList}>
          {roles
            .filter(role => role._id !== selectedRole._id)
            .map(role => (
              <li key={role._id}>
                <button
                  type="button"
                  style={{ backgroundColor: role.color }}
                  className={styles.roleBtn}
                  value={role.name}
                  onClick={onSelectRole}
                >
                  {role.name}
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

RoleSelector.propTypes = {
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id_user: PropTypes.string.isRequired,
    }),
  ).isRequired,
  rolesListIsOpen: PropTypes.bool.isRequired,
  selectedRole: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id_user: PropTypes.string.isRequired,
  }).isRequired,
  roleSelectorDisplayToggle: PropTypes.func.isRequired,
  onSelectRole: PropTypes.func.isRequired,
};

export default RoleSelector;
