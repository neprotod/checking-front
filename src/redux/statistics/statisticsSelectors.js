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

  return tasks.filter(task => task.role[0].id === roleId);
};

export const getDoneTasksByRole = (store, roleId) => {
  const tasks = getTasksByRole(store, roleId);

  return tasks.filter(task => task.done);
};

export const percentsCompletedTasks = (store, roleId) => {
  const doneTasks = getDoneTasksByRole(store, roleId).length;

  if (doneTasks) {
    const allTasks = getTasksByRole(store, roleId).length;

    const difference = doneTasks / allTasks;

    return Math.round(difference * 100);
  }

  return 0;
};
