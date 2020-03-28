// General config for all env
const general = {
  defaultRole: {
    _id: 'none',
    name: 'None',
    color: '#cdd0d9',
    id_user: 'none',
  },
};

const env =
  process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'develop';

// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${env}.env`);

export default {
  ...general,
  ...config.default,
};
