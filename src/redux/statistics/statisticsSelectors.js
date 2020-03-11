// import { createSelector } from 'reselect';

export const getDateTasks = store => store.statistics.dateTasks;
export const getAllRoles = store => store.statistics.statisticsRoles;
export const getIsLoading = store => store.statistics.isLoading;
export const getCategory = store => store.statistics.category;

// export const getTasksByRole = createSelector(
//   [(store, roleId) => roleId, getDateTasks],
//   (roleId, tasks) =>
//     tasks.filter(task => {
//       console.log('roleId: ', roleId);
//       console.log('task: ', task);
//       return task.role[0].id === roleId;
//     }),
// );

export const getTasksByRole = (store, roleId) => {
  const tasks = getDateTasks(store);

  return tasks.filter(task => task.role[0]._id === roleId);
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

  const statistic = roles.map(role => ({
    ...role,
    completedTask: getDoneTasksByRole(store, role._id).length,
    precents: rolePercents(store, role._id),
    totalRoleTasks: getTasksByRole(store, role._id).length,
  }));

  return statistic;
};

// export const statistics = createSelector(
//   [getAllRoles, getDoneTasksByRole, rolePercents, getTasksByRole],
//   (roles, completedTask, precents, totalRoleTasks) => {
//     console.log(roles);
//     const statistic = roles.map(role => ({
//       ...role,
//       completedTask: completedTask.length,
//       precents,
//       totalRoleTasks: totalRoleTasks.length,
//     }));

//     return statistic;
//   },
// );