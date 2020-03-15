import shortid from 'shortid';

export const getDateTasks = store => store.statistics.dateTasks;
export const getAllRoles = store => store.statistics.statisticsRoles;
export const getIsLoading = store => store.statistics.isLoading;
export const getCategory = store => store.statistics.category;

export const getTasksByRole = (store, roleId) => {
  const tasks = getDateTasks(store);

  const tasksByRole = tasks.filter(task => {
    if (task.role.length < 1) return false;

    return task.role[0]._id === roleId;
  });

  return tasksByRole;
};

const getTasksWithoutRole = store => {
  const tasks = getDateTasks(store);

  return tasks.filter(task => task.role < 1);
};

const getDoneTasksWithoutRole = store => {
  const tasks = getTasksWithoutRole(store);
  return tasks.filter(task => task.done);
};

const withoutRolePercents = store => {
  const withoutRoleTasks = getTasksWithoutRole(store).length;

  if (withoutRoleTasks) {
    const allTasks = getDateTasks(store).length;

    const difference = withoutRoleTasks / allTasks;

    return Math.round(difference * 100);
  }

  return 0;
};

const getDoneTasksByRole = (store, roleId) => {
  const tasks = getTasksByRole(store, roleId);

  return tasks.filter(task => task.done);
};

const rolePercents = (store, roleId) => {
  const roleTasks = getTasksByRole(store, roleId).length;

  if (roleTasks) {
    const allTasks = getDateTasks(store).length;

    const difference = roleTasks / allTasks;

    return Math.round(difference * 100);
  }

  return 0;
};

export const statistics = store => {
  const roles = getAllRoles(store);
  const tasksWithoutRole = getTasksWithoutRole(store);

  const statistic = roles.map(role => ({
    ...role,
    completedTask: getDoneTasksByRole(store, role._id).length,
    precents: rolePercents(store, role._id),
    totalRoleTasks: getTasksByRole(store, role._id).length,
  }));

  if (tasksWithoutRole < 0) return statistic;

  const withoutRoleTasks = {
    _id: shortid.generate(),
    name: 'none',
    color: '#9B9B9B',
    completedTask: getDoneTasksWithoutRole(store).length,
    precents: withoutRolePercents(store),
    totalRoleTasks: tasksWithoutRole.length,
  };

  statistic.push(withoutRoleTasks);

  return statistic;
};
