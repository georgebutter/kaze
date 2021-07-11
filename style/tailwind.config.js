const {kaze} = require('../src/config');
module.exports = kaze({
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'stripes': `linear-gradient(
          45deg,
          #fff 12.5%,
          transparent 12.5%,
          transparent 50%,
          #fff 50%,
          #fff 62.5%, 
          transparent 62.5%,
          transparent 100%
        );`,
      }),
      backgroundSize: {
        1: '0.25rem 0.25rem',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
});

