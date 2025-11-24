const merge = require('lodash.merge');

module.exports.kaze = (config) => {
  if (Array.isArray(config.purge)) {
    config.purge = {
      content: config.purge,
    };
  }
  const kazeConfig = {
    darkMode: false,
    purge: {
      enabled: true,
      safelist: getSafeList(),
    },
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
  const merged = merge(kazeConfig, config);
  return merged;
};

const getSafeList = () => [
  // Box model
  'box-content',
  // Aspect ratios
  ...getAspects('aspect-h'),
  ...getAspects('aspect-w'),
  // Flex
  'flex',
  'flex-col',
  'flex-row',
  'flex-none',
  'flex-wrap',
  'flex-grow',
  'flex-grow-999',
  // Gap
  ...getAspects('gap'),
  // Grid
  'grid',
  'grid-cols-auto250',
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
  'grid-cols-11',
  'grid-cols-12',
  'grid-cols-none',
  // Heights
  'h-auto',
  'h-full',
  // Item alignments (flex)
  'items-start',
  'items-center',
  'items-end',
  // Justify alignments (flex)
  'justify-start',
  'justify-center',
  'justify-end',
  'justify-between',
  // Margins
  'm-0',
  'mx-auto',
  // Max widths
  'max-w-0',
  'max-w-none',
  'max-w-xs',
  'max-w-sm',
  'max-w-md',
  'max-w-lg',
  'max-w-xl',
  'max-w-2xl',
  'max-w-3xl',
  'max-w-4xl',
  'max-w-5xl',
  'max-w-6xl',
  'max-w-7xl',
  'max-w-full',
  'max-w-min',
  'max-w-max',
  'max-w-prose',
  // Min heights
  'min-h-screen',
  // Min widths
  'min-w-1/2',
  // Object size
  'object-contain',
  'object-cover',
  'object-fill',
  'object-none',
  'object-scale-down',
  // Object position
  'object-bottom',
  'object-center',
  'object-left',
  'object-left-bottom',
  'object-left-top',
  'object-right',
  'object-right-bottom',
  'object-right-top',
  'object-top',
  // Overflows
  'overflow-x-auto',
  'overflow-y-hidden',
  // Paddings
  ...getSpacings('p'),
  ...getSpacings('px'),
  // Spacings
  ...getSpacings('space-x'),
  ...getSpacings('space-y'),
  // Widths
  'w-0',
  'w-auto',
  'w-full',
];

const getSpacings = (prefix) => {
  const spacings = [
    '0',
    '0.5',
    '1',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '5',
  ];
  return spacings.map((s) => `${prefix}-${s}`);
};

const getAspects = (prefix) => {
  const aspects = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
  ];
  return aspects.map((s) => `${prefix}-${s}`);
};

