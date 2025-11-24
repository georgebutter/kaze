const {kaze} = require('../config');
module.exports = kaze({
  content: ['./src/**/*.{ts,tsx}', './style/kaze/**/*.ts'],
  darkMode: 'class', // or false or 'media'
  theme: {
    extend: {
      backgroundImage: {
        stripes: `linear-gradient(45deg, #fff 12.5%, transparent 12.5%, transparent 50%, #fff 50%, #fff 62.5%, transparent 62.5%, transparent 100%)`,
      },
      backgroundSize: {
        1: '0.5rem 0.5rem',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
});
