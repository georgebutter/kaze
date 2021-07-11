const merge = require('lodash.merge');

module.exports.kaze = (config) => {
  const kazeConfig = {
    darkMode: false,
    theme: {
      extend: {
      },
    },
    variants: {
      extend: {
      },
    },
  };
  return merge(kazeConfig, config);
};
