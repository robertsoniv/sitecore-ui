const Alert = {
  baseStyle: {
    container: {
      rounded: 'md',
    },
    icon: {
      color: 'inherit',
    },
  },

  variants: {
    // only applies to `subtle` variant, repeat for other variants if necessary
    subtle: (props: any) => {
      const { colorScheme } = props;
      if (colorScheme === 'blue') {
        return {
          container: {
            bg: 'teal.100',
          },
          icon: {
            color: 'teal.400',
          },
        };
      }
      if (colorScheme === 'green') {
        return {
          container: {
            bg: 'primary.100',
          },
          icon: {
            color: 'primary.400',
          },
        };
      }
    },
  },
};

export default Alert;
