// import { createSelector } from 'reselect';

export const getDateTasks = store => store.statistics.dateTasks;
export const getAllRoles = store => store.statistics.statisticsRoles;
export const getIsLoading = store => store.statistics.isLoading;

// export const getTasksByRole = createSelector(
//   [(store, roleId) => roleId, getDateTasks],
//   (roleId, tasks) => tasks.filter(task => task.role[0].id === roleId),
// );

export const getTasksByRole = (store, roleId) => {
  const tasks = getDateTasks(store);

  return tasks.filter(task => task.role[0]._id === roleId);
};

const getDoneTasksByRole = (store, roleId) => {
  const tasks = getTasksByRole(store, roleId);

  return tasks.filter(task => task.done);
};

const percentsCompletedTasks = (store, roleId) => {
  const doneTasks = getDoneTasksByRole(store, roleId).length;

  if (doneTasks) {
    const allTasks = getTasksByRole(store, roleId).length;

    const difference = doneTasks / allTasks;

    return Math.round(difference * 100);
  }

  return 0;
};

export const statistics = store => {
  const roles = getAllRoles(store);

  const statistic = roles.map(role => ({
    ...role,
    completedTask: getDoneTasksByRole(store, role._id).length,
    precents: percentsCompletedTasks(store, role._id),
    totalRoleTasks: getTasksByRole(store, role._id).length,
  }));

  return statistic;
};
