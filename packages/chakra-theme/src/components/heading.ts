const Heading = {
  baseStyle: {
    fontWeight: 'semibold',
  },
  variants: {
    section: {
      color: 'chakra-placeholder-color',
      textTransform: 'uppercase',
      fontSize: 'sm',
    },
  },
  sizes: {
    '4xl': {
      fontSize: ['5xl', '6xl', '7xl'],
      lineHeight: [1],
    },
    '3xl': {
      fontSize: ['4xl', '5xl', '6xl'],
      lineHeight: [1.2, 1],
    },
    '2xl': {
      fontSize: ['3xl', '4xl', '5xl'],
      lineHeight: [1.2, 1.2, 1],
    },
    xl: {
      fontSize: ['2xl', '3xl', '4xl'],
      lineHeight: [1.33, 1.33, 1.2],
    },
    lg: {
      fontSize: ['xl', '2xl', '3xl'],
      lineHeight: [1.33, 1.33, 1.2],
    },
  },
};

export default Heading;
