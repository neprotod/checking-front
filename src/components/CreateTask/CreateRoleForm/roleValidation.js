import { object, string } from 'yup';

const roleSchema = object().shape({
  name: string()
    .test(value => {
      if (value.length === 0) {
        throw new Error(['* Role name is required']);
      }
      if (value.length > 15) {
        throw new Error(['* Maximum 15 characters']);
      }
      return true;
    })
    .required(),
  color: string().required(),
});

export default roleSchema;
