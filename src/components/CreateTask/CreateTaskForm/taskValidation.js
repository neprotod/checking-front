import { object, string, date, boolean } from 'yup';

const err = {};

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
  if (Object.keys(err).length !== 0) {
    throw new Error(JSON.stringify(err));
  }
};
