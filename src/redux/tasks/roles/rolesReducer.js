/* eslint-disable no-underscore-dangle */
import types from './rolesTypes';

const rolesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_ROLES_SUCCESS:
      return payload.roles;

    case types.ADD_ROLE_SUCCESS:
      return [...state, payload.role];

    case types.DELETE_ROLE_SUCCESS:
      return state.filter(el => el._id !== payload.id);

    case types.UPDATE_ROLE_SUCCESS:
      return state.map(el =>
        el._id === payload.id ? { ...el, ...payload.data } : el,
      );

    case types.GET_ROLES_ERROR:
    case types.ADD_ROLE_ERROR:
    case types.DELETE_ROLE_ERROR:
      return state;

    default:
      return state;
  }
};

export default rolesReducer;
