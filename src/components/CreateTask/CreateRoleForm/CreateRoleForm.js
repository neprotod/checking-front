/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import Message from '../Message/Message';

import styles from './CreateRoleForm.module.css';

class CreateRoleForm extends Component {
  static propTypes = {
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        id_user: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getRoles: PropTypes.func.isRequired,
    addRole: PropTypes.func.isRequired,
    updateRole: PropTypes.func.isRequired,
    deleteRole: PropTypes.func.isRequired,
  };

  state = {
    roleName: '',
    roleColor: '',
    roleToUpdateId: '',
    colorPickerIsOpen: false,
    messageIsShowing: false,
    messageText: '',
  };

  componentDidMount() {
    const { getRoles } = this.props;
    getRoles();
  }

  onInputChange = ({ target }) => {
    this.setState({ roleName: target.value });
  };

  handleColorChange = color => {
    this.setState({ roleColor: color.hex });
  };

  colorPickerDisplayToggle = () => {
    this.setState(prevState => ({
      colorPickerIsOpen: !prevState.colorPickerIsOpen,
    }));
  };

  // eslint-disable-next-line consistent-return
  onAddRole = async e => {
    e.preventDefault();

    const { roleName, roleColor, roleToUpdateId } = this.state;
    const { roles, addRole, updateRole } = this.props;

    if (roleName.length < 3) {
      return this.showMessage('* Minimum 3 characters');
    }
    if (roleName.length > 15) {
      return this.showMessage('* Maximum 15 characters');
    }

    const findNameMatch = roles.find(
      role => role.name.toLowerCase() === roleName.toLowerCase(),
    );

    if (findNameMatch) {
      return this.showMessage(`* Role "${roleName}" already exists`);
    }

    const role = { name: roleName, color: roleColor || '#cdd0d9' };

    if (roleToUpdateId) {
      await updateRole(roleToUpdateId, role);
    } else {
      await addRole(role);
    }
    this.setState({ roleName: '', roleColor: '', roleToUpdateId: '' });
  };

  onUpdateRole = id => {
    const { roles } = this.props;
    const roleToUpdate = roles.find(role => role._id === id);

    this.setState({
      roleName: roleToUpdate.name,
      roleColor: roleToUpdate.color,
      roleToUpdateId: id,
    });
  };

  onDeleteRole = async id => {
    const { deleteRole } = this.props;
    await deleteRole(id);
  };

  showMessage = text => {
    this.setState(
      prevState => ({
        messageIsShowing: !prevState.messageIsShowing,
        messageText: text,
      }),
      () =>
        setTimeout(() => {
          this.setState(prevState => ({
            messageIsShowing: !prevState.messageIsShowing,
            messageText: '',
          }));
        }, 3000),
    );
  };

  render() {
    const {
      roleName,
      roleColor,
      colorPickerIsOpen,
      messageIsShowing,
      messageText,
    } = this.state;

    const { roles } = this.props;

    return (
      <div className={styles.container}>
        <form className={styles.createRoleForm} onSubmit={this.onAddRole}>
          {messageIsShowing && <Message text={messageText} form="role" />}
          <input
            className={styles.roleInput}
            id="wJydJeS6hm"
            type="text"
            value={roleName}
            placeholder="Enter role name"
            onChange={this.onInputChange}
          />
          <button
            className={styles.roleColorBth}
            style={{ backgroundColor: roleColor || '#cdd0d9' }}
            type="button"
            onClick={this.colorPickerDisplayToggle}
          >
            <span>Color</span>
            {colorPickerIsOpen ? (
              <svg className={styles.iconArrow}>
                <use href="#drop_up" />
              </svg>
            ) : (
              <svg className={styles.iconArrow}>
                <use href="#drop_down" />
              </svg>
            )}
          </button>
          {colorPickerIsOpen && (
            <SketchPicker
              className={styles.colorPicker}
              color={roleColor}
              onChangeComplete={this.handleColorChange}
            />
          )}
          <button className={styles.saveRoleBtn} type="submit">
            <svg className={styles.iconSave}>
              <use className={styles.iconSave} href="#save" />
            </svg>
          </button>
        </form>
        {roles.length > 0 && (
          <ul className={styles.rolesList}>
            {roles.map(role => (
              <li
                className={styles.roleItem}
                style={{ backgroundColor: role.color }}
                key={role._id}
              >
                <span className={styles.roleName}>{role.name}</span>
                <div className={styles.roleItemControls}>
                  <button
                    className={styles.editBtn}
                    type="button"
                    onClick={() => this.onUpdateRole(role._id)}
                  >
                    <svg className={styles.iconEdit}>
                      <use href="#edit" />
                    </svg>
                  </button>
                  <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() => this.onDeleteRole(role._id)}
                  >
                    <svg className={styles.iconDelete}>
                      <use href="#delete" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CreateRoleForm;
