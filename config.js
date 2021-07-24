const merge = require('lodash.merge');

module.exports.kaze = (config) => {
  const kazeConfig = {
    darkMode: false,
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
      extend: {
        flexGrow: {
          '999': '999',
        },
        gridTemplateColumns: {
          auto250: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
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
