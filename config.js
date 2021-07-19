const merge = require('lodash.merge');

module.exports.kaze = (config) => {
  const kazeConfig = {
    darkMode: false,
    theme: {
      extend: {
        flexGrow: {
          '999': '999',
        },
        minWidth: {
          '1/2': '50%',
          '3/4': '75%',
        },
      },
    },
    variants: {
      extend: {
      },
    },
  };
  return merge(kazeConfig, config);
};
