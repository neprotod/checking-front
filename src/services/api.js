import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.baseUrl;

export default {
  register(user) {
    axios.post('user/register', user);
  },
  login(user) {
    axios.post('user/login', user);
  },
  logout() {
    axios.get('user/logout');
  },
  getTask(id) {
    axios.get(`tasks/${id}`);
  },
  getTasks(value = '') {
    axios.get(`tasks?filter=${value}`);
  },
  createTask(task) {
    axios.post('tasks', task);
  },
  updateTask(id, value) {
    axios.put(`tasks${id}`, value);
  },
  deleteTask(id) {
    axios.delete(`tasks/${id}`);
  },
  getAllPriority() {
    axios.get('tasks/priority');
  },
  getAllUserRoles() {
    axios.get('user/roles');
  },
  createRole(role) {
    axios.post('user/roles', role);
  },
  deleteRole(id) {
    axios.delete(`user/roles/${id}`);
  },
};
