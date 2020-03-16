const getTasks = store => store.tasks;

const getTaskById = (store, id) => {
  const tasks = getTasks(store);

  return tasks.find(task => task.id === id);
};

export default { getTasks, getTaskById };
