/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoleSelector.module.css';

const RoleSelector = ({
  roles,
  selectedRole,
  defaultRole,
  rolesListIsOpen,
  roleSelectorDisplayToggle,
  onSelectRole,
}) => {
  const rolesWithDefaultRole = [...roles, defaultRole];

  const roleToDisplay = rolesWithDefaultRole.find(
    role => role._id === selectedRole._id,
  );

  const roleNameToDisplay = () => {
    if (roleToDisplay) {
      return roleToDisplay.name.length > 10
        ? `${roleToDisplay.name.slice(0, 10)}...`
        : roleToDisplay.name;
    }
    return defaultRole.name;
  };

  const roleColorToDisplay = () => {
    if (roleToDisplay) {
      return roleToDisplay.color;
    }
    return defaultRole.color;
  };

  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: roleColorToDisplay(),
        }}
        className={styles.roleSelectBtn}
        onClick={roleSelectorDisplayToggle}
      >
        <span>{roleNameToDisplay()}</span>
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
          {rolesWithDefaultRole
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

RoleSelector.defaultProps = {
  selectedRole: '',
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
  selectedRole: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id_user: PropTypes.string.isRequired,
  }),
  defaultRole: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id_user: PropTypes.string.isRequired,
  }).isRequired,
  rolesListIsOpen: PropTypes.bool.isRequired,
  roleSelectorDisplayToggle: PropTypes.func.isRequired,
  onSelectRole: PropTypes.func.isRequired,
};

export default RoleSelector;
