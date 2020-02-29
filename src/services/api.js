import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.baseUrl;

export const register = user => axios.post('/user/register', user);

export const login = user => axios.post('user/login', user);

export const logout = () => axios.get('/logout');

export const getTask = id => axios.get(`/tasks/${id}`);

export const getTasks = value => axios.get(`/tasks?filter=${value}`);

export const createTask = task => axios.post('/tasks', task);

export const updateTask = (id, value) => axios.put(`/tasks${id}`, value);

export const deleteTask = id => axios.delete(`/tasks/${id}`);

export const getAllPriority = () => axios.get('/tasks/priority');

export const getAllUserRoles = () => axios.get('/user/roles');

export const createRole = role => axios.post('/user/roles', role);

export const deleteRole = id => axios.delete(`/user/roles/${id}`);
