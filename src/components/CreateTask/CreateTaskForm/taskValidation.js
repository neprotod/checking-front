import { object, string, date, boolean } from 'yup';
import { setTimeout } from 'core-js';

const err = {
  title: null,
  description: null,
};

export const taskSchema = object().shape({
  role: string(),
  priority: string().required(),
  title: string()
    .test(value => {
      if (value.length === 0) {
        err.title = '(task title is required)*';
      }
      if (value.length > 150) {
        err.title = '(up to 150 characters)*';
      }
      return true;
    })
    .required(),
  description: string()
    .test(value => {
      if (value.length === 0) {
        err.description = '(task description is required)*';
      }
      if (value.length > 800) {
        err.description = '(up to 800 characters)*';
      }
      return true;
    })
    .required(),
  start_date: date().required(),
  end_date: date().required(),
  done: boolean().required(),
});

export const throwErr = () => {
  if (err.title !== null || err.description !== null) {
    setTimeout(() => {
      err.title = null;
      err.description = null;
    }, 500);
    throw new Error(JSON.stringify(err));
  }
};
