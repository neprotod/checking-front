import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.baseUrl;

export default {
  async register(user) {
    const result = await axios.post('user/register', user);
    return result;
  },
  async login(user) {
    const result = await axios.post('user/login', user);
    return result;
  },
  async logout() {
    const result = await axios.get('user/logout');
    return result;
  },
  async getTask(id) {
    const result = await axios.get(`tasks/${id}`);
    return result;
  },
  async getTasks(value = '') {
    const result = await axios.get(`tasks?filter=${value}`);
    return result;
  },
  async createTask(task) {
    const result = await axios.post('tasks', task);
    return result;
  },
  async updateTask(id, value) {
    const result = await axios.put(`tasks${id}`, value);
    return result;
  },
  async deleteTask(id) {
    const result = await axios.delete(`tasks/${id}`);
    return result;
  },
  async getAllPriority() {
    const result = await axios.get('tasks/priority');
    return result;
  },
  async getAllUserRoles() {
    const result = await axios.get('user/roles');
    return result;
  },
  async createRole(role) {
    const result = await axios.post('user/roles', role);
    return result;
  },
  async deleteRole(id) {
    const result = await axios.delete(`user/roles/${id}`);
    return result;
  },
};
